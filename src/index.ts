import { IYamlTocItem } from '@microsoft/api-documenter/lib/yaml/IYamlTocFile';
import { JsonFile } from '@microsoft/node-core-library';

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

interface ITocConfig {
  items: Array<IYamlTocItem & { extended?: boolean }>;
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

  // delete unnecessary navigation items for docs.microsoft but present on the Fabric website
  delete categoriesSource['Fluent Theme'];
  delete categoriesSource['Other'];

  const topCategories = Object.keys(categoriesSource);

  for (const topCategory of topCategories) {
    const configItem: IYamlTocItem = {
      name: topCategory,
      items: [],
    };

    const categoryItems = Object.keys(categoriesSource[topCategory]);
    for (const categoryItem of categoryItems) {
      if (configItem.items) {
        configItem.items.push({
          name: categoryItem,
          items: [],
        });
      }
    }

    if (tocConfig.items[0] && tocConfig.items[0].items) {
      tocConfig.items[0].items.push(configItem);
    }
  }

  const config = {
    tableOfContents: {
      tocConfig,
      catchAllCategory: 'References',
      noDuplicateEntries: true,
      // some possible filters to fill the leaf nodes `items` arrays.
      filterByApiItemName: false,
      filterByInlineTag: '@docCategory',
    },
  };

  // writing file
  JsonFile.save(config, '../config/api-documenter.json');
}

generateConfig(categories);
