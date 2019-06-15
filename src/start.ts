import { IYamlTocItem } from '@microsoft/api-documenter/lib/yaml/IYamlTocFile';
import { FileSystem, JsonFile } from '@microsoft/node-core-library';
import * as Mustache from 'mustache';
import * as path from 'path';

const [nodePath, scriptPath, docsOutputPath]: Array<string | undefined> = process.argv;

if (!docsOutputPath) {
  throw new Error('Must specify a docs output path as the first argument to this script');
}

if (!path.isAbsolute(docsOutputPath)) {
  throw new Error('The docs output path must be absolute');
}

const categories = {
  'Basic Inputs': {
    Button: {},
    Checkbox: {},
    ChoiceGroup: {},
    ComboBox: {},
    Dropdown: {},
    Label: {},
    Link: {},
    Rating: {},
    SearchBox: {},
    Slider: {},
    SpinButton: {},
    TextField: {},
    Toggle: {},
  },
  'Galleries & Pickers': {
    Pickers: {},
    Calendar: {},
    ColorPicker: {},
    DatePicker: {},
    PeoplePicker: {},
    SwatchColorPicker: {},
  },
  'Items & Lists': {
    List: { title: 'Basic List' },
    DetailsList: {
      subPages: {
        // Names, titles, and URLs here are partial.
        // A simple entry like this:
        //   Basic: {}
        // will produce an actual page like this:
        //   component: DetailsListBasicPage
        //   title:     DetailsList - Basic
        //   url:       #/controls/web/detailslist/basic
        // An entry like this:
        //   CustomColumns: { title: 'Custom Item Columns', url: 'customitemcolumns' }
        // will produce an actual page like this:
        //   component: DetailsListCustomColumnsPage
        //   title:     DetailsList - Custom Item Columns
        //   url:       #/controls/web/detailslist/customitemcolumns
        Basic: {},
        Compact: {},
        Grouped: {},
        LargeGrouped: { title: 'Large Grouped' },
        CustomColumns: { title: 'Custom Item Columns', url: 'customitemcolumns' },
        CustomRows: { title: 'Custom Item Rows', url: 'customitemrows' },
        CustomFooter: { title: 'Custom Footer' },
        CustomGroupHeaders: { title: 'Custom Group Headers' },
        Advanced: { title: 'Variable Row Heights', url: 'variablerowheights' },
        DragDrop: { title: 'Drag & Drop', url: 'draganddrop' },
        NavigatingFocus: { title: 'Inner Navigation', url: 'innernavigation' },
        Shimmer: {},
      },
    },
    GroupedList: {},
    ActivityItem: {},
    DocumentCard: {},
    Facepile: {},
    HoverCard: {},
    Persona: {},
  },
  'Commands, Menus & Navs': {
    Breadcrumb: {},
    CommandBar: {},
    ContextualMenu: {},
    Nav: {},
    OverflowSet: {},
    Pivot: {},
  },
  'Notification & Engagement': {
    Coachmark: {},
    MessageBar: {},
    TeachingBubble: {},
  },
  Progress: {
    ProgressIndicator: {},
    Shimmer: {},
    Spinner: {},
  },
  Surfaces: {
    Callout: {},
    Dialog: {},
    Modal: {},
    Panel: {},
    ScrollablePane: {},
    Tooltip: {},
  },
  Utilities: {
    Announced: {
      subPages: {
        QuickActions: { title: 'Quick Actions' },
        SearchResults: { title: 'Search Results' },
        LazyLoading: { title: 'Lazy Loading' },
        BulkOperations: { title: 'Bulk Operations' },
      },
    },
    FocusTrapZone: {},
    FocusZone: {},
    Icon: {},
    Image: {},
    Keytips: {},
    Layer: {},
    MarqueeSelection: {},
    Overlay: {},
    ResizeGroup: {},
    Selection: {},
    Separator: {},
    Stack: {},
    Text: {},
    Themes: {},
  },
  'Fluent Theme': {
    FluentTheme: { title: 'Fluent Theme', url: 'fluent-theme' },
  },
  References: {},
  // The "Other" category can be useful for local development, but it currently can also cause
  // non-web controls (such as Chip) to show up on the web controls page.
  // Other: {}
};

const TOC_EXAMPLE_URL = '~/docs/examples';
const TOC_OVERVIEW_URL = '~/docs/overviews';

const URL_NORMALIZE_PART = '(https://developer.microsoft.com/en-us/fabric#/';

const CONFIG_PATH = path.resolve(__dirname, '..', 'config', 'api-documenter.json');

const EXAMPLE_FILES_FOLDER_PATH = path.resolve(docsOutputPath, 'examples');
const OVERVIEW_FILES_FOLDER_PATH = path.resolve(docsOutputPath, 'overviews');

const EXAMPLE_TEMPLATE_PATH = path.resolve(__dirname, '..', 'src', 'ExampleMarkdown.mustache');
const OVERVIEW_TEMPLATE_PATH = path.resolve(__dirname, '..', 'src', 'Overview.mustache');

const DOCS_FILES_PATH = path.resolve(__dirname, '..', 'node_modules', 'office-ui-fabric-react', 'src', 'components');

interface ITocConfig {
  items: IYamlTocItem[];
}

/**
 * Function that will be running every time before calling api-documenter and generate a json file along with writing example files.
 */
function generateConfig(categoriesSource: any) {
  const tocConfig: ITocConfig = {
    items: [
      {
        name: 'Office UI Fabric React',
        uid: 'office-ui-fabric-react',
        items: [],
      },
    ],
  };

  const nonEmptyCategoryNodeNames: string[] = ['References'];

  // delete unnecessary navigation items for docs.microsoft but present on the Fabric website
  delete categoriesSource['Fluent Theme'];
  delete categoriesSource['Other'];

  // Cleaning up the examples and overviews folders
  console.log('Deleting old examples from ' + EXAMPLE_FILES_FOLDER_PATH);
  FileSystem.ensureEmptyFolder(EXAMPLE_FILES_FOLDER_PATH);
  console.log('Deleting old overviews from ' + OVERVIEW_FILES_FOLDER_PATH);
  FileSystem.ensureEmptyFolder(OVERVIEW_FILES_FOLDER_PATH);
  console.log('----------------------------------------------------------');
  console.log();

  const topCategories = Object.keys(categoriesSource);

  // First loop iterates over controls categories like: 'Basic Inputs', 'Galleries & Pickers',...
  for (const topCategory of topCategories) {
    // Creating a node for each category
    const topCategoryNode: IYamlTocItem = {
      name: topCategory,
      items: [],
    };

    // Since we don't use package level TOC generated by default, most of the API items in 'References'
    // will reference the package yaml file which is omitted with our custom implementation of TOC,
    // so we inject those here in references manually so that they already are included in the api-documenter.json config file.
    if (topCategory === 'References' && topCategoryNode && topCategoryNode.items) {
      topCategoryNode.items.push(
        {
          name: 'merge-styles',
          uid: 'merge-styles',
        },
        {
          name: 'styling',
          uid: 'styling',
        },
        {
          name: 'utilities',
          uid: 'utilities',
        },
      );
    }

    // All the controls under a category that we are looping over on each iteration
    const topCategoryItems = Object.keys(categoriesSource[topCategory]);

    // Second inner loop iterates over each control in each category of the outer loop
    for (const topCategoryItem of topCategoryItems) {
      // Each item represents a component. Creating a reference pointer.
      const item: IYamlTocItem = {
        name: topCategoryItem,
        items: [],
      };

      // Removing this item for now as it has no api-items or examples and results in  broken link on docs.microsoft
      if (topCategoryItem === 'Themes') {
        continue;
      }

      // Overview nodes injections in TOC and files generation
      injectOverview(topCategoryItem, item);

      // Examples nodes injection in TOC and files generation
      injectExamples(categoriesSource, topCategory, topCategoryItem, item);

      // pushing the item into it's top category node
      if (topCategoryNode.items) {
        topCategoryNode.items.push(item);
      }

      // adding the name of the node to the nonEmptyCategoryNodeNames array now that we also push examples
      nonEmptyCategoryNodeNames.push(topCategoryItem);
    }

    if (tocConfig.items[0] && tocConfig.items[0].items) {
      tocConfig.items[0].items.push(topCategoryNode);
    }
  }

  const config = {
    tableOfContents: {
      tocConfig,
      catchAllCategory: 'References',
      categoryInlineTag: 'docCategory',
      nonEmptyCategoryNodeNames,
    },
  };

  // writing file
  JsonFile.save(config, CONFIG_PATH);
}

/**
 * Helper function to inject nodes in the TOC and create files for the `Overview` page
 */
function injectOverview(topCategoryItem: string, itemReference: IYamlTocItem): void {
  const itemPath: string = resolveSpecialCases(topCategoryItem, `${DOCS_FILES_PATH}/${topCategoryItem}/docs`);

  // Content of all 3 files Overview, Dos and Donts that we want to concatenate in one file
  const overview: string =
    normalizeContentUrls(readMarkdownFile(`${itemPath}/${resolveSpecialCases(topCategoryItem)}Overview.md`)) ||
    'Coming soon...';
  const dos: string =
    normalizeContentUrls(readMarkdownFile(`${itemPath}/${resolveSpecialCases(topCategoryItem)}Dos.md`)) ||
    'Coming soon...';
  const donts: string =
    normalizeContentUrls(readMarkdownFile(`${itemPath}/${resolveSpecialCases(topCategoryItem)}Donts.md`)) ||
    'Coming soon...';

  const overviewTemplate: string = FileSystem.readFile(OVERVIEW_TEMPLATE_PATH);
  const fileData: string = Mustache.render(overviewTemplate, { overview, dos, donts });

  try {
    FileSystem.writeFile(`${OVERVIEW_FILES_FOLDER_PATH}/${topCategoryItem}Overview.md`, fileData, {
      ensureFolderExists: true,
    });

    itemReference.items!.push({
      name: 'Overview',
      href: `${TOC_OVERVIEW_URL}/${topCategoryItem}Overview.md`,
    });
  } catch (error) {
    console.log(error);
  }
}

/**
 * Helper function to inject example page nodes into the TOC and also calls the write file helper function.
 */
function injectExamples(
  categoriesSource: any,
  topCategory: string,
  topCategoryItem: string,
  itemReference: IYamlTocItem,
): void {
  const itemNameNormalized = topCategoryItem.toLowerCase();

  // In case a component has it's examples split into sub-pages then we handle it differently
  if (categoriesSource[topCategory][topCategoryItem].subPages) {
    const examplesNodeReference: IYamlTocItem = {
      name: `${topCategoryItem} Examples`,
      items: [],
    };

    // special case for DetailsList having an example page not listed under sub-pages but we still want it to be included.
    if (topCategoryItem === 'DetailsList') {
      const writingFinished: boolean = writeExampleFile(
        'DetailsList Example',
        'detailslist',
        'detailslist/detailslist',
      );

      if (writingFinished) {
        examplesNodeReference.items!.push({
          name: 'Details List',
          href: `${TOC_EXAMPLE_URL}/${itemNameNormalized}/detailslist.md`,
        });
      }
    }

    const subPages = categoriesSource[topCategory][topCategoryItem].subPages;

    for (const key in subPages) {
      if (subPages.hasOwnProperty(key)) {
        const name: string = subPages[key].title || key;
        const pathAndUrl: string = `${subPages[key].url || key.toLowerCase()}`;

        // generate a markdown file
        const writingFinished: boolean = writeExampleFile(
          `${topCategoryItem} ${name} Example`,
          `${itemNameNormalized}/${pathAndUrl}`,
        );

        if (writingFinished) {
          examplesNodeReference.items!.push({
            name,
            href: `${TOC_EXAMPLE_URL}/${itemNameNormalized}/${pathAndUrl}.md`,
          });
        }
      }
    }

    itemReference.items!.push(examplesNodeReference);
  } else {
    // generate a markdown file
    const writingFinished: boolean = writeExampleFile(`${topCategoryItem} Examples`, itemNameNormalized);

    // push an example node to the items array of the component node
    if (writingFinished) {
      itemReference.items!.push({
        name: `${topCategoryItem} Examples`,
        href: `${TOC_EXAMPLE_URL}/${itemNameNormalized}.md`,
      });
    }
  }
}

/**
 * Helper function to handle the example files generation.
 */
function writeExampleFile(componentName: string, componentUrl: string, fileLocationPath?: string): boolean {
  const exampleTemplate: string = FileSystem.readFile(EXAMPLE_TEMPLATE_PATH);
  const fileData: string = Mustache.render(exampleTemplate, { componentName, componentUrl });

  try {
    FileSystem.writeFile(`${EXAMPLE_FILES_FOLDER_PATH}/${fileLocationPath || componentUrl}.md`, fileData, {
      ensureFolderExists: true,
    });
    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
}

/**
 * Helper function to aid in reading the markdown files needed for Overview pages and not to throw in case it doesn't exist.
 */
function readMarkdownFile(markdownFilePath: string): string {
  try {
    return FileSystem.readFile(markdownFilePath);
  } catch (error) {
    console.log(`Can not find a file at path: ${markdownFilePath}`);
  }
  return '';
}

/**
 * Helper function to resolve some special cases for the path of the markdown files needed for Overview pages.
 * TODO: might need to revisit this idea and replace it with something similar to https://www.npmjs.com/package/glob
 * but for the moment using as a bandage :)
 */
function resolveSpecialCases(topCategoryItem: string, fullPath?: string): string {
  const specialCases: string[] = ['Keytips', 'Selection', 'PeoplePicker'];

  if (specialCases.indexOf(topCategoryItem) !== -1) {
    switch (topCategoryItem) {
      case 'Keytips':
        if (fullPath) return fullPath.replace('Keytips', 'Keytip');
        else return 'Keytip';
      case 'Selection':
        if (fullPath) return fullPath.replace('components', 'utilities').replace('Selection', 'selection');
        else return topCategoryItem;
      case 'PeoplePicker':
        if (fullPath) return fullPath.replace('PeoplePicker', 'pickers/PeoplePicker');
        else return topCategoryItem;
      default:
        break;
    }
  }

  return fullPath || topCategoryItem;
}

function normalizeContentUrls(content: string): string {
  if (!content) return content;
  return content.replace(/(\(#\/)/gi, URL_NORMALIZE_PART);
}

// Start generation.
generateConfig(categories);
