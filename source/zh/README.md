---
home: true
heroImage: /img/banner.jpg
actionText: 快速开始 →
actionLink: /zh/guide/
features:
- title: 携带自己的数据
  details: 使用一条快速有效的管道上载，优化和托管3D地理空间数据。
- title: 流化和可视化
  details: 构建美观的交互式3D应用程序。融合数据并流到任何设备。
- title: 发掘见解
  details: 样式，过滤，查询和度量。执行独特的3D分析。
---

<p align="center">
<b>Cesium是一个快速，简单，端到端的平台，用于平铺，可视化和分析3D地理空间数据</b>
</p>

::: tip 声明
此项目仅供学习之用，不得商用，资料来源于互联网，如有涉权请[告知](https://github.com/Sogrey/Cesium-start/issues/1)。
:::

<p align="center">
Hosted by <a href="https://pages.github.com" target="_blank" style="font-weight:bold">Github Pages</a>
</p>

---
<!-- 自定义footer -->
<p align="center">
<a href="https://sogrey.github.io/about/mit.html" target="_blank">MIT License</a> | © 2019 <a href="https://sogrey.github.io" target="_blank">Sogrey</a> | 如有疑问提<a href="https://github.com/Sogrey/Cesium-start/issues/new" target="_blank">Issue</a> 
</p>
<br><br>



<style>
/**按键样式*/
.btn-gradient{text-decoration:none;color:white;padding:10px 30px;display:inline-block;position:relative;border:1px solid rgba(0,0,0,0.21);border-bottom:4px solid rgba(0,0,0,0.21);border-radius:4px;text-shadow:0 1px 0 rgba(0,0,0,0.15)}.btn-gradient.cyan{background:rgba(27,188,194,1);background:-webkit-gradient(linear,0 0,0 100%,from(rgba(27,188,194,1)),to(rgba(24,163,168,1)));background:-webkit-linear-gradient(rgba(27,188,194,1) 0,rgba(24,163,168,1) 100%);background:-moz-linear-gradient(rgba(27,188,194,1) 0,rgba(24,163,168,1) 100%);background:-o-linear-gradient(rgba(27,188,194,1) 0,rgba(24,163,168,1) 100%);background:linear-gradient(rgba(27,188,194,1) 0,rgba(24,163,168,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#1bbcc2',endColorstr='#18a3a8',GradientType=0)}.btn-gradient.red{background:rgba(250,90,90,1);background:-webkit-gradient(linear,0 0,0 100%,from(rgba(250,90,90,1)),to(rgba(232,81,81,1)));background:-webkit-linear-gradient(rgba(250,90,90,1) 0,rgba(232,81,81,1) 100%);background:-moz-linear-gradient(rgba(250,90,90,1) 0,rgba(232,81,81,1) 100%);background:-o-linear-gradient(rgba(250,90,90,1) 0,rgba(232,81,81,1) 100%);background:linear-gradient(rgba(250,90,90,1) 0,rgba(232,81,81,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fa5a5a',endColorstr='#e85151',GradientType=0)}.btn-gradient.orange{background:rgba(255,105,30,1);background:-webkit-gradient(linear,0 0,0 100%,from(rgba(255,105,30,1)),to(rgba(230,95,28,1)));background:-webkit-linear-gradient(rgba(255,105,30,1) 0,rgba(230,95,28,1) 100%);background:-moz-linear-gradient(rgba(255,105,30,1) 0,rgba(230,95,28,1) 100%);background:-o-linear-gradient(rgba(255,105,30,1) 0,rgba(230,95,28,1) 100%);background:linear-gradient(rgba(255,105,30,1) 0,rgba(230,95,28,1) 100%)}.btn-gradient.blue{background:rgba(102,152,203,1);background:-moz-linear-gradient(top,rgba(102,152,203,1) 0,rgba(92,138,184,1) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0%,rgba(102,152,203,1)),color-stop(100%,rgba(92,138,184,1)));background:-webkit-linear-gradient(top,rgba(102,152,203,1) 0,rgba(92,138,184,1) 100%);background:-o-linear-gradient(top,rgba(102,152,203,1) 0,rgba(92,138,184,1) 100%);background:-ms-linear-gradient(top,rgba(102,152,203,1) 0,rgba(92,138,184,1) 100%);background:linear-gradient(to bottom,rgba(102,152,203,1) 0,rgba(92,138,184,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#6698cb',endColorstr='#5c8ab8',GradientType=0)}.btn-gradient.purple{background:rgba(203,153,197,1);background:-moz-linear-gradient(top,rgba(203,153,197,1) 0,rgba(181,134,176,1) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0%,rgba(203,153,197,1)),color-stop(100%,rgba(181,134,176,1)));background:-webkit-linear-gradient(top,rgba(203,153,197,1) 0,rgba(181,134,176,1) 100%);background:-o-linear-gradient(top,rgba(203,153,197,1) 0,rgba(181,134,176,1) 100%);background:-ms-linear-gradient(top,rgba(203,153,197,1) 0,rgba(181,134,176,1) 100%);background:linear-gradient(to bottom,rgba(203,153,197,1) 0,rgba(181,134,176,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#cb99c5',endColorstr='#b586b0',GradientType=0)}.btn-gradient.yellow{background:rgba(240,210,100,1);background:-webkit-gradient(linear,0 0,0 100%,from(rgba(240,210,100,1)),to(rgba(229,201,96,1)));background:-webkit-linear-gradient(rgba(240,210,100,1) 0,rgba(229,201,96,1) 100%);background:-moz-linear-gradient(rgba(240,210,100,1) 0,rgba(229,201,96,1) 100%);background:-o-linear-gradient(rgba(240,210,100,1) 0,rgba(229,201,96,1) 100%);background:linear-gradient(rgba(240,210,100,1) 0,rgba(229,201,96,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f0d264',endColorstr='#e5c960',GradientType=0)}.btn-gradient.green{background:rgba(130,200,160,1);background:-moz-linear-gradient(top,rgba(130,200,160,1) 0,rgba(130,199,158,1) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0%,rgba(130,200,160,1)),color-stop(100%,rgba(130,199,158,1)));background:-webkit-linear-gradient(top,rgba(130,200,160,1) 0,rgba(130,199,158,1) 100%);background:-o-linear-gradient(top,rgba(130,200,160,1) 0,rgba(130,199,158,1) 100%);background:-ms-linear-gradient(top,rgba(130,200,160,1) 0,rgba(130,199,158,1) 100%);background:linear-gradient(to bottom,rgba(130,200,160,1) 0,rgba(124,185,149,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#82c8a0',endColorstr='#82c79e',GradientType=0)}.btn-gradient.red:active{background:#e35252}.btn-gradient.orange:active{background:#e8601b}.btn-gradient.cyan:active{background:#169499}.btn-gradient.blue:active{background:#608fbf}.btn-gradient.purple:active{background:#bd8eb7}.btn-gradient.yellow:active{background:#dbc05b}.btn-gradient.green:active{background:#72b08e}.btn-gradient{margin:5px}a[class*="btn"]{text-decoration:none}.btn-gradient.mini{padding: 4px 12px;font-size: 12px;color: white;text-decoration: none;}a.btn-gradient.mini:hover,a.btn-gradient.mini:focus,a.btn-gradient.mini:focus-within{text-decoration: none;}
/**按键样式 end*/
</style>
