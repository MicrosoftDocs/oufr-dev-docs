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
