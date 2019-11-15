# 简介及

::: tip Cesium是什么？
Cesium ['siːzɪəm]是JavaScript开源库，通过Cesium，实现无插件的创建三维球和二维地图。它是通过WebGL技术实现图形的硬件加速，并且跨平台，跨浏览器，并提供动态数据的可视化展现。
:::

- [cesium官网](https://cesium.com/)
- [cesium github](https://github.com/AnalyticalGraphicsInc/cesium)

更多参考资料见[参考资料](../reference/)

---

开始cesium前，先下载cesium源码，可以从官方网站[下载](https://cesium.com/downloads/)也可以到[cesium github](https://github.com/AnalyticalGraphicsInc/cesium) clone。

我这里选择基于node依赖安装，前提需要安装[node](https://nodejs.org/en/)。

IDE:[Visual Studio Code](https://code.visualstudio.com/)

服务器:[live-server](https://sogrey.github.io/Plug-in/guide.html#live-server-编辑浏览html网页) (基于node)

先执行

``` bash
npm init
```

配置生成`package.json`:

```bash
Administrator@WIN-IQLNPTL95TO MINGW64 /e/workspace/Gis/sogrey/Cesium-start-Example (master)
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (cesium-start-example)
version: (1.0.0)
description: cesium 入门示例
entry point: (index.js)
test command:
git repository: (https://github.com/Sogrey/Cesium-start-Example.git)
keywords: cesium examples
author: Sogrey
license: (ISC) MIT
About to write to E:\workspace\Gis\sogrey\Cesium-start-Example\package.json:

{
  "name": "cesium-start-example",
  "version": "1.0.0",
  "description": "cesium 入门示例",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Sogrey/Cesium-start-Example.git"
  },
  "keywords": [
    "cesium",
    "examples"
  ],
  "author": "Sogrey",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/Sogrey/Cesium-start-Example/issues"
  },
  "homepage": "https://github.com/Sogrey/Cesium-start-Example#readme"
}

Is this OK? (yes) y
```

如上，学习过程中的示例存放在[Cesium-start-Example](https://github.com/Sogrey/Cesium-start-Example.git)，再执行

``` bash
npm i cesium
```

安装cesium依赖，完成后自动多出一个目录`node_modules`。查看`node_modules` 下 `cesium` 的目录结构：

![](../../.vuepress/public/img/cesium-floder.jpg)

其中

- `Build`目录下是打包后的，
  - `Cesium`目录下是压缩好的，用于生产
  - `CesiumUnminified`是未压缩的，可用于开发调试
- `Source` 为源码

自此，环境配置就基本完成了。