---
title: Fabric React Getting Started | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

# Overview
UI Fabric for the web is available in two flavors: Fabric React and Fabric Core.

<!-- manually creating h3 to avoid duplicate auto-generated IDs -->
<h3 class="fabric-react-overview">Fabric React</h3>

Fabric React is the official [open-source](https://github.com/OfficeDev/office-ui-fabric-react) React front-end framework designed to build experiences that fit seamlessly into a broad range of Microsoft products. It provides robust, up-to-date, accessible components which are highly customizable using CSS-in-JS. [Get started with Fabric React](#fabric-react)

<h3 class="fabric-core-overview">Fabric Core</h3>

Fabric Core is an [open-source](https://github.com/OfficeDev/office-ui-fabric-core) collection of CSS classes and Sass mixins that give you access to Fabric's colors, animations, fonts, icons and grid. [Get started with Fabric Core](#fabric-core)

<h3 class="for-designers">For Designers</h3>

UI Fabric also provides resources to help you [use our design language in your site](#use-our-design-language).


# Fabric React
Getting started developing with Fabric React is simple!

To quickly try out Fabric React, you can use our "Hello World" templates on [CodePen](https://aka.ms/fabricpen) or [CodeSandbox](https://aka.ms/fabricsandbox).

You can also add Fabric React to an existing project or use one of our starter kits to create a new project.

### Add to existing project

Fabric React is available via the `office-ui-fabric-react` [npm package](https://www.npmjs.com/package/office-ui-fabric-react). To use this package in an existing project:

```shell
# with npm
npm install office-ui-fabric-react

# with yarn
yarn add office-ui-fabric-react
```

```jsx
import { PrimaryButton } from 'office-ui-fabric-react';
```


# Start a new Fabric React project
Fabric React provides several starter kit options. Make sure you have the [latest LTS Node.js](https://nodejs.org/en/) installed, then choose one of the options below:

- [Option 1: Quick start](#option-1-quick-start)
- [Option 2: Using Create React App](#option-2-create-react-app)
- [Option 3: Using Gatsby.js](#option-3-gatsby-js)

### Option 1: Quick start

Open a terminal and go to the folder where you want the project created, then run:

```shell
npm init uifabric
```

It'll prompt you for a project name. For example, if you call the project `my-app`, you can start it like this:

```shell
cd my-app
npm start
```

Open up the `App.tsx` file and start editing. You'll see your changes in the browser seconds after you hit save.

This scaffold uses the [Just](https://github.com/microsoft/just) build library. It is very flexible and requires no "eject" script to allow customizing configuration.

### Option 2: Create React App

UI Fabric also provides a starter using [Create React App](https://facebook.github.io/create-react-app/), a popular development stack maintained by the creators of React.

Open a terminal, go to an appropriate folder, and clone the [starter repo](https://github.com/microsoft/create-react-app-uifabric):

```shell
git clone https://github.com/microsoft/create-react-app-uifabric.git my-app
cd my-app
```

Then install dependencies and start the app like this:

```shell
# with npm (default)
npm install
npm start

# with yarn (optional)
yarn
yarn start
```

### Option 3: Gatsby.js

To start creating a blazing fast static website or app using UI Fabric and [Gatsby.js](https://www.gatsbyjs.org/), run the following in a terminal:

```shell
npm install -g gatsby-cli
gatsby new gatsby-site kenotron/gatsby-starter-uifabric
cd gatsby-site
gatsby develop
```

This app be deployed to the cloud in one click—[learn more here](https://github.com/microsoft/gatsby-starter-uifabric#-deploy).


# Next steps with Fabric React
Now you're ready to [explore Fabric controls](https://developer.microsoft.com/en-us/fabric#/controls/web) and use them in your app!

To learn more about Fabric React, check out the links below.

### Tutorials

For more detailed tutorials about developing and testing Fabric React apps, see the day 2 and bonus sections of this [frontend bootcamp material](https://microsoft.github.io/frontend-bootcamp/).

### Fabric React wiki

The [Fabric React wiki](https://github.com/OfficeDev/office-ui-fabric-react/wiki) has information about advanced usage, building and contributing to Fabric React, and more.

### Styling and theming

Fabric React components are highly customizable using CSS-in-JS. We also support customization of colors and more throughout the entire app using themes.

For an overview of styling and theming approaches in Fabric, see [this page](https://github.com/Microsoft/frontend-bootcamp/tree/master/step2-03/demo). Then check out the links below for more details:

  <li class="mdut--full">[Theme designer](https://aka.ms/themedesigner)
  <li class="mdut--full">[Customizing CSS-in-JS styled components](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
  <li class="mdut--full">[Theming deep dive](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Theming)


# Fabric Core
[Fabric Core](https://github.com/OfficeDev/office-ui-fabric-core) is a collection of CSS classes and Sass mixins that give you access to Fabric's colors, animations, fonts, icons and grid.

### Who should use Fabric Core

Fabric Core is primarily meant for non-React applications or static pages.

If you're using Fabric React, you may not need Fabric Core. Most of the styles from Fabric Core are also available via CSS-in-JS styling, which is the recommended styling approach with Fabric React.

### Adding Fabric Core to your site

To add the latest Fluent version of Fabric Core to your site, link to this CSS file in the `<head>` of your webpage. (For the pre-Fluent styles, replace `10.0.0` with `9.6.1` in the `href`.)

```html
<link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/10.0.0/css/fabric.min.css" />
```

Fabric Core is also available [via npm](https://www.npmjs.com/package/office-ui-fabric-core) as `office-ui-fabric-core`, or you can [download a copy](https://github.com/OfficeDev/office-ui-fabric-core/releases) to include in your project.

### Using Fabric Core class names

To use the styles, add the `ms-Fabric` class to a containing element, such as `<body>`, to set the `font-family` for all Fabric typography classes used within that element. Then apply the Fabric styles directly to your HTML elements.

```html
<body class="ms-Fabric" dir="ltr">
  <span class="ms-font-su ms-fontColor-themePrimary">Big blue text</span>
</body>
```


# Use our design language in your site
### Styles

Fabric gives you access to Segoe, Microsoft’s official typeface, along with the color palette, type ramp, icons, and responsive grid for Office 365. [Learn more](https://developer.microsoft.com/en-us/fabric#/styles/web)

### Icons

Fabric includes Office’s official product icons. Fabric also provides a suite of product and document symbols, so you can use the same metaphors we use. [Learn more](https://developer.microsoft.com/en-us/fabric#/styles/web/icons)

### Controls

Controls are the building blocks of your UI. Fabric has a variety of controls, including navigation, commands, containers, and content. [Learn more](https://developer.microsoft.com/en-us/fabric#/controls/web)

### Design toolkits

Our Fabric design toolkits provide styles, controls and layout templates that enable you to create beautiful and coherent Microsoft experiences. [Learn more](https://developer.microsoft.com/en-us/fabric#/resources)

---

Usage of Fabric assets, such as fonts and icons, is subject to the [assets license agreement](https://aka.ms/fabric-assets-license).
