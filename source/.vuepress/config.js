module.exports = {
  port: "3000",
  dest: "docs",
  ga: "UA-85414008-1",
  base: "/Cesium-start/",
  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  },
  lang: "zh-CN",
  title: "Cesium 入门",
  description: "Cesium 学习笔记",
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "Cesium 入门",
      description: "Cesium 学习笔记"
    },
    // 暂时不提供英文
    // "/en/": {
    //   lang: "en-US",
    //   title: "Cesium start",
    //   description: "Cesium notes"
    // }
  },
  head: [
    ["link", {
      rel: "icon",
      href: `/favicon.ico`
    }]
  ],
  themeConfig: {
    repo: "Sogrey/Cesium-start",
    docsRepo: "Sogrey/Cesium-start",
    editLinks: true,
    docsDir: 'source',
    locales: {
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [{
            text: "指南",
            link: "/zh/guide/"
          },{
            text: "pdf",
            link: "https://github.com/Sogrey/Cesium-start/blob/master/vuepress2pdf/Cesium%E5%85%A5%E9%97%A8%E7%AC%94%E8%AE%B0.pdf"
          },
          {
            text: "Example",
            link: "https://sogrey.github.io/Cesium-start-Example/"
          },
          {
            text: "参考资料",
            link: "/zh/reference/"
          },
          {
            text: "外链",
            items: [{
                text: "Cesium 官网",
                link: "https://cesium.com/index.html"
              },
              {
                text: "Cesium Github",
                link: "https://github.com/AnalyticalGraphicsInc/cesium"
              },
              {
                text: "Cesium 官方文档",
                link: "https://cesium.com/docs/"
              },
              {
                text: "Cesium 官方示例",
                link: "https://sandcastle.cesium.com/"
              }
            ]
          }
        ],
        sidebar: {
          "/zh/guide/": genGuideSidebar(true)
        }
      },
      // "/en/": {
      //   label: "English",
      //   selectText: "Languages",
      //   editLinkText: "Edit this page on GitHub",
      //   lastUpdated: "Last Updated",
      //   nav: [{
      //       text: "Guide",
      //       link: "/en/guide/"
      //     },
      //     {
      //       text: "reference",
      //       link: "/en/reference/"
      //     },
      //     {
      //       text: "Links",
      //       items: [{
      //           text: "Cesium website",
      //           link: "https://cesium.com/index.html"
      //         },
      //         {
      //           text: "Cesium Github",
      //           link: "https://github.com/AnalyticalGraphicsInc/cesium"
      //         },
      //         {
      //           text: "Cesium docs",
      //           link: "https://cesium.com/docs/"
      //         }
      //       ]
      //     }
      //   ],
      //   sidebar: {
      //     "/en/guide/": genGuideSidebar(false)
      //   }
      // }
    }
  }
};

function genGuideSidebar(isZh) {
  return [{
      title: isZh ? "快速入门" : "quick start",
      collapsable: false,
      children: [
        "" /*留空的指向README.md*/ ,
        "01-hello-world"/**Hello world*/,
        "02-Viewer-some-helpful-widgets" /**Viewer 以及一些有用的组件*/
      ]
    },
    {
      title: isZh ? "核心功能" : "Core",
      collapsable: false,
      children: [
        "03-coordinate-system"/**坐标系 */,
        "04-Viewer"/**Viewer类-一切API的入口*/,
        "05-Camera"/**Camera类-去哪儿，随心所欲 */,
        "06-ImageryLayer"/**ImageryLayer类-影像图层，给地球换个皮肤 */,
        "07-TerrainProvider"/**TerrainProvider类-地形，让三维表现更立体 */,
        "08-Entity-API"/**与地球交互 */,
        "09-Cesium3DTileset"/**让场景更细致更真实 */,
        "10-Primitive-API"/**性能好，才是真的好 */,
        "11-Fabric"/**玩点高级 */,
        "12-ParticleSystem"/**粒子系统 */
      ]
    },
    {
      title: isZh ? "其他" : "Other",
      collapsable: false,
      children: [
        "other/01-InputAction-Pick"/**鼠标交互 */,
        "other/02-CustomBubble"/**自定义气泡 */,  
        "other/03-pick"/**Cesium 中的各种pick */,   
        "other/04-height"/**Cesium 各高度的获取 */,   
        
      ]
    },
    {
      title: isZh ? "模型转码" : "Model transcoding",
      collapsable: false,
      children: [
        "transcoding/01-dae-2-gltf-bgltf"/**dae转gltf/bgltf */,
        
      ]
    },
    {
      title: isZh ? "遇到一些问题" : "QA",
      collapsable: false,
      children: [
        "QA/01-CORS-policy"/**鼠标交互 */,
        "QA/02-ModelDrift"/**模型漂移 */,   
        "QA/03-BGDrift"/**底图偏移 */, 
      ]
    }
  ]
}