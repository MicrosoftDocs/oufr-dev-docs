import { IYamlTocItem } from '@microsoft/api-documenter/lib/yaml/IYamlTocFile';

export interface ITocConfig {
  items: IYamlTocItem[];
}

export interface IInjectionPagePaths {
  base: string;
  template: string;
  output: string;
}

export interface IPaths {
  example: string;
  overview: string;
  getStarted: string;
  resources: string;
}

export interface IDeepPaths {
  fabricDocs: string;
  getStartedDocs: string;
  resourcesDocs: string;
}
