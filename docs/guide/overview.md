---
sidebar_position: 1
---

# Overview

This is an overview of guide


## features Tom

- Faas
- Api-route
- Dynamic routes
- _middleware


## Config Repraance

- outputPath?: string;
- ssr?: boolean;
- publicDir?: string;
- publicPath?: string;
- env?: Record<string, string>;
- router?: IRouterConfig;
- routes?: IUserRouteConfig[]; // generate by files what under src/pages or user defined
- apiRoutes?: IApiRouteConfig[]; // generate by files what under src/apis or user defined
- apiConfig?: IApiConfig;
- runtimeConfig?: IRuntimeConfig;
- target?: 'spa' | 'ssr';
- platform?: IPlatformConfig;
- proxy?: any;
- plugins?: IPluginConfig[];
- presets?: IPresetConfig[];
- analyze?: boolean;
- experimental?: {
  parcelCss?: boolean;
 };

## Directory Structure Repraance

	.shuvi
	Dist
	Public 目录
	/src
		/apis
        /pages
        _middleware.js
        shuvi.config.js
        App.js
        Error.js
        404.js
        500.js
        .env
        Server.js
        Document.js
        Document.ejs.js
  
## Plugins Repraance

    cli-plugins
    server-plugins
    web-plugins

    example: redox-react, 相关api



