import { IYamlTocItem } from '@microsoft/api-documenter/lib/yaml/IYamlTocFile';
import { categories, ICategory } from '@uifabric/fabric-website/lib/SiteDefinition/SiteDefinition.pages/Controls/web';
import fs = require('fs');

interface ITocConfig {
    items: Array<IYamlTocItem & {extended?: boolean}>
}

/**
 * Function that will be running every time before calling api-documenter and generate a schema file.
 * It will write a schema that all it needs is just to fill the empty `items` arrays for each node that has one.
 * In the future we can make modifications to the logic so that to include additional things
 * like pages with examples that have nothing to do with the API json files.
 */
function generateConfig(categoriesSource: ICategory) {
  const tocConfig: ITocConfig = {
    items: [
      {
        name: 'Office UI Fabric React',
        href: '~/homepage/homepage.md',
      },
      {
        name: 'Office UI Fabric React',
        href: 'office-ui-fabric-react',
        extended: true,
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

    if (tocConfig.items[1].items) {
        tocConfig.items[1].items.push(configItem);
    }
  }

  const config = {
    tocConfig,
    catchAllCategory: 'References',
    noDuplicateEntries: true,
    // some possible filters to fill the leaf nodes `items` arrays.
    filterByApiItemName: false,
    filterByInlineTag: '@docCategory',
  };

  // writing file
  const json = JSON.stringify(config);
  fs.writeFileSync('config/api-documenter.json', json, 'utf8');
}

generateConfig(categories);
