# Overview
UI Fabric for the web is available in two flavors: Fabric React and Fabric Core.

&lt;!-- manually creating h3 to avoid duplicate auto-generated IDs --&gt;
&lt;h3 class&#x3D;&quot;fabric-react-overview&quot;&gt;Fabric React&lt;&#x2F;h3&gt;

Fabric React is the official [open-source](https:&#x2F;&#x2F;github.com&#x2F;OfficeDev&#x2F;office-ui-fabric-react) React front-end framework designed to build experiences that fit seamlessly into a broad range of Microsoft products. It provides robust, up-to-date, accessible components which are highly customizable using CSS-in-JS. [Get started with Fabric React](#fabric-react)

&lt;h3 class&#x3D;&quot;fabric-core-overview&quot;&gt;Fabric Core&lt;&#x2F;h3&gt;

Fabric Core is an [open-source](https:&#x2F;&#x2F;github.com&#x2F;OfficeDev&#x2F;office-ui-fabric-core) collection of CSS classes and Sass mixins that give you access to Fabric&#39;s colors, animations, fonts, icons and grid. [Get started with Fabric Core](#fabric-core)

&lt;h3 class&#x3D;&quot;for-designers&quot;&gt;For Designers&lt;&#x2F;h3&gt;

UI Fabric also provides resources to help you [use our design language in your site](#use-our-design-language).


# Fabric React
Getting started developing with Fabric React is simple!

To quickly try out Fabric React, you can use our &quot;Hello World&quot; templates on [CodePen](https:&#x2F;&#x2F;aka.ms&#x2F;fabricpen) or [CodeSandbox](https:&#x2F;&#x2F;aka.ms&#x2F;fabricsandbox).

You can also add Fabric React to an existing project or use one of our starter kits to create a new project.

### Add to existing project

Fabric React is available via the &#x60;office-ui-fabric-react&#x60; [npm package](https:&#x2F;&#x2F;www.npmjs.com&#x2F;package&#x2F;office-ui-fabric-react). To use this package in an existing project:

&#x60;&#x60;&#x60;shell
# with npm
npm install office-ui-fabric-react

# with yarn
yarn add office-ui-fabric-react
&#x60;&#x60;&#x60;

&#x60;&#x60;&#x60;jsx
import { PrimaryButton } from &#39;office-ui-fabric-react&#39;;
&#x60;&#x60;&#x60;


# Start a new Fabric React project
Fabric React provides several starter kit options. Make sure you have the [latest LTS Node.js](https:&#x2F;&#x2F;nodejs.org&#x2F;en&#x2F;) installed, then choose one of the options below:

- [Option 1: Quick start](#option-1-quick-start)
- [Option 2: Using Create React App](#option-2-create-react-app)
- [Option 3: Using Gatsby.js](#option-3-gatsby-js)

### Option 1: Quick start

Open a terminal and go to the folder where you want the project created, then run:

&#x60;&#x60;&#x60;shell
npm init uifabric
&#x60;&#x60;&#x60;

It&#39;ll prompt you for a project name. For example, if you call the project &#x60;my-app&#x60;, you can start it like this:

&#x60;&#x60;&#x60;shell
cd my-app
npm start
&#x60;&#x60;&#x60;

Open up the &#x60;App.tsx&#x60; file and start editing. You&#39;ll see your changes in the browser seconds after you hit save.

This scaffold uses the [Just](https:&#x2F;&#x2F;github.com&#x2F;microsoft&#x2F;just) build library. It is very flexible and requires no &quot;eject&quot; script to allow customizing configuration.

### Option 2: Create React App

UI Fabric also provides a starter using [Create React App](https:&#x2F;&#x2F;facebook.github.io&#x2F;create-react-app&#x2F;), a popular development stack maintained by the creators of React.

Open a terminal, go to an appropriate folder, and clone the [starter repo](https:&#x2F;&#x2F;github.com&#x2F;microsoft&#x2F;create-react-app-uifabric):

&#x60;&#x60;&#x60;shell
git clone https:&#x2F;&#x2F;github.com&#x2F;microsoft&#x2F;create-react-app-uifabric.git my-app
cd my-app
&#x60;&#x60;&#x60;

Then install dependencies and start the app like this:

&#x60;&#x60;&#x60;shell
# with npm (default)
npm install
npm start

# with yarn (optional)
yarn
yarn start
&#x60;&#x60;&#x60;

### Option 3: Gatsby.js

To start creating a blazing fast static website or app using UI Fabric and [Gatsby.js](https:&#x2F;&#x2F;www.gatsbyjs.org&#x2F;), run the following in a terminal:

&#x60;&#x60;&#x60;shell
npm install -g gatsby-cli
gatsby new gatsby-site kenotron&#x2F;gatsby-starter-uifabric
cd gatsby-site
gatsby develop
&#x60;&#x60;&#x60;

This app be deployed to the cloud in one click—[learn more here](https:&#x2F;&#x2F;github.com&#x2F;microsoft&#x2F;gatsby-starter-uifabric#-deploy).


# Next steps with Fabric React
Now you&#39;re ready to [explore Fabric controls](#&#x2F;controls&#x2F;web) and use them in your app!

To learn more about Fabric React, check out the links below.

### Tutorials

For more detailed tutorials about developing and testing Fabric React apps, see the day 2 and bonus sections of this [frontend bootcamp material](https:&#x2F;&#x2F;microsoft.github.io&#x2F;frontend-bootcamp&#x2F;).

### Fabric React wiki

The [Fabric React wiki](https:&#x2F;&#x2F;github.com&#x2F;OfficeDev&#x2F;office-ui-fabric-react&#x2F;wiki) has information about advanced usage, building and contributing to Fabric React, and more.

### Styling and theming

Fabric React components are highly customizable using CSS-in-JS. We also support customization of colors and more throughout the entire app using themes.

For an overview of styling and theming approaches in Fabric, see [this page](https:&#x2F;&#x2F;github.com&#x2F;Microsoft&#x2F;frontend-bootcamp&#x2F;tree&#x2F;master&#x2F;step2-03&#x2F;demo). Then check out the links below for more details:

&lt;ul class&#x3D;&quot;md-list--flex&quot;&gt;
  &lt;li class&#x3D;&quot;mdut--full&quot;&gt;[Theme designer](https:&#x2F;&#x2F;aka.ms&#x2F;themedesigner)&lt;&#x2F;li&gt;
  &lt;li class&#x3D;&quot;mdut--full&quot;&gt;[Customizing CSS-in-JS styled components](https:&#x2F;&#x2F;github.com&#x2F;OfficeDev&#x2F;office-ui-fabric-react&#x2F;wiki&#x2F;Component-Styling)&lt;&#x2F;li&gt;
  &lt;li class&#x3D;&quot;mdut--full&quot;&gt;[Theming deep dive](https:&#x2F;&#x2F;github.com&#x2F;OfficeDev&#x2F;office-ui-fabric-react&#x2F;wiki&#x2F;Theming)&lt;&#x2F;li&gt;
&lt;&#x2F;ul&gt;


# Fabric Core
[Fabric Core](https:&#x2F;&#x2F;github.com&#x2F;OfficeDev&#x2F;office-ui-fabric-core) is a collection of CSS classes and Sass mixins that give you access to Fabric&#39;s colors, animations, fonts, icons and grid.

### Who should use Fabric Core

Fabric Core is primarily meant for non-React applications or static pages.

If you&#39;re using Fabric React, you may not need Fabric Core. Most of the styles from Fabric Core are also available via CSS-in-JS styling, which is the recommended styling approach with Fabric React.

### Adding Fabric Core to your site

To add the latest Fluent version of Fabric Core to your site, link to this CSS file in the &#x60;&lt;head&gt;&#x60; of your webpage. (For the pre-Fluent styles, replace &#x60;10.0.0&#x60; with &#x60;9.6.1&#x60; in the &#x60;href&#x60;.)

&#x60;&#x60;&#x60;html
&lt;link rel&#x3D;&quot;stylesheet&quot; href&#x3D;&quot;https:&#x2F;&#x2F;static2.sharepointonline.com&#x2F;files&#x2F;fabric&#x2F;office-ui-fabric-core&#x2F;10.0.0&#x2F;css&#x2F;fabric.min.css&quot; &#x2F;&gt;
&#x60;&#x60;&#x60;

Fabric Core is also available [via npm](https:&#x2F;&#x2F;www.npmjs.com&#x2F;package&#x2F;office-ui-fabric-core) as &#x60;office-ui-fabric-core&#x60;, or you can [download a copy](https:&#x2F;&#x2F;github.com&#x2F;OfficeDev&#x2F;office-ui-fabric-core&#x2F;releases) to include in your project.

### Using Fabric Core class names

To use the styles, add the &#x60;ms-Fabric&#x60; class to a containing element, such as &#x60;&lt;body&gt;&#x60;, to set the &#x60;font-family&#x60; for all Fabric typography classes used within that element. Then apply the Fabric styles directly to your HTML elements.

&#x60;&#x60;&#x60;html
&lt;body class&#x3D;&quot;ms-Fabric&quot; dir&#x3D;&quot;ltr&quot;&gt;
  &lt;span class&#x3D;&quot;ms-font-su ms-fontColor-themePrimary&quot;&gt;Big blue text&lt;&#x2F;span&gt;
&lt;&#x2F;body&gt;
&#x60;&#x60;&#x60;


# Use our design language in your site
### Styles

Fabric gives you access to Segoe, Microsoft’s official typeface, along with the color palette, type ramp, icons, and responsive grid for Office 365. [Learn more](#&#x2F;styles&#x2F;web)

### Icons

Fabric includes Office’s official product icons. Fabric also provides a suite of product and document symbols, so you can use the same metaphors we use. [Learn more](#&#x2F;styles&#x2F;web&#x2F;icons)

### Controls

Controls are the building blocks of your UI. Fabric has a variety of controls, including navigation, commands, containers, and content. [Learn more](#&#x2F;controls&#x2F;web)

### Design toolkits

Our Fabric design toolkits provide styles, controls and layout templates that enable you to create beautiful and coherent Microsoft experiences. [Learn more](#&#x2F;resources)

---

Usage of Fabric assets, such as fonts and icons, is subject to the [assets license agreement](https:&#x2F;&#x2F;aka.ms&#x2F;fabric-assets-license).
