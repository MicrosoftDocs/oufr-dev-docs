import { IYamlTocItem } from '@microsoft/api-documenter/lib/yaml/IYamlTocFile';
import { FileSystem, JsonFile } from '@microsoft/node-core-library';
import * as Mustache from 'mustache';

export const categories = {
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

const CONFIG_PATH = '../config/api-documenter.json';
const TOC_EXAMPLE_FILES_PATH = '~/docs/examples';
const EXAMPLE_FILES_FOLDER = '../office-ui-fabric-react/docs/examples';
const EXAMPLE_TEMPLATE_PATH = '../src/ExampleMarkdown.mustache';

interface ITocConfig {
  items: IYamlTocItem[];
}

/**
 * Function that will be running every time before calling api-documenter and generate a schema file.
 * It will write a schema that all it needs is just to fill the empty `items` arrays for each node that has one.
 * In the future we can make modifications to the logic so that to include additional things
 * like pages with examples that have nothing to do with the API json files.
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

  console.log('Deleting old examples from ' + EXAMPLE_FILES_FOLDER);
  FileSystem.ensureEmptyFolder(EXAMPLE_FILES_FOLDER);

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

    const topCategoryItems = Object.keys(categoriesSource[topCategory]);

    // Second inner loop iterates over each control in each category of the outer loop
    for (const topCategoryItem of topCategoryItems) {
      // Each item represents a component. Creating a reference pointer.
      const item: IYamlTocItem = {
        name: topCategoryItem,
        items: [],
      };

      if (topCategoryItem === 'Themes') {
        continue;
      }

      // Examples injection logic
      injectExamples(categoriesSource, topCategory, topCategoryItem, item);
      

      // pushing the item into it's top category node
      if (topCategoryNode.items) {
        topCategoryNode.items.push(item);
      }

      // adding the name of the node to the nonEmptyCategoryNodeNames array
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

function injectExamples(categoriesSource: any, topCategory: string, topCategoryItem: string, itemReference: IYamlTocItem) {
  const itemNameNormalized = topCategoryItem.toLowerCase();

  // In case a component has it's examples split into sub-pages then we handle it differently
  if (categoriesSource[topCategory][topCategoryItem].subPages) {
    const examplesNodeReference: IYamlTocItem = {
      name: `${topCategoryItem} Examples`,
      items: [],
    };

    const subPages = categoriesSource[topCategory][topCategoryItem].subPages;
    for (const key in subPages) {
      if (subPages.hasOwnProperty(key)) {
        const name: string = subPages[key].title || key;
        const pathAndUrl: string = `${subPages[key].url || key.toLowerCase()}`;

        const writingFinished: boolean = writeExampleFile(topCategoryItem, `${itemNameNormalized}/${pathAndUrl}`);

        if (writingFinished) {
          examplesNodeReference.items!.push({
            name,
            href: `${TOC_EXAMPLE_FILES_PATH}/${itemNameNormalized}/${pathAndUrl}.md`,
          });
        }
      }
    }

    itemReference.items!.push(examplesNodeReference);
  } else {
    // generate a markdown file
    const writingFinished: boolean = writeExampleFile(topCategoryItem, itemNameNormalized);

    // push an example node to the items array of the component node
    if (writingFinished) {
      itemReference.items!.push({
        name: `${topCategoryItem} Examples`,
        href: `${TOC_EXAMPLE_FILES_PATH}/${itemNameNormalized}.md`,
      });
    }
  }
}

function writeExampleFile(fileName: string, url: string): boolean {
  const exampleTemplate: string = FileSystem.readFile(EXAMPLE_TEMPLATE_PATH);
  const fileData: string = Mustache.render(exampleTemplate, { componentName: fileName, componentUrl: url });

  try {
    FileSystem.writeFile(`${EXAMPLE_FILES_FOLDER}/${url}.md`, fileData, { ensureFolderExists: true });
    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
}

generateConfig(categories);
