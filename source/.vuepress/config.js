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
      title: isZh ? "快速入门" : "Getting Start",
      collapsable: false,
      children: ["", "quick-start"]
    },
    {
      title: isZh ? "核心功能" : "Core",
      collapsable: false,
      children: ["generator"]
    }
  ]
}
