# cesium 坐标系



![](../../.vuepress/public/img/coordinate-system.jpg)

cesium 坐标系中心点在地心原点。单位米。

Cesium的坐标是以地心为原点，一向指向南美洲，一向指向亚洲，一向指向北极州

- 从经纬度经`fromDegrees`函数转换成[Cartesian3](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html?classFilter=Cartesian3)世界坐标。

  fromDegrees()方法，将经纬度和高程转换为世界坐标
  
  ``` js
  Cesium.Cartesian3.fromDegrees(-117.16, 32.71,   15000.0)
  //等同于
  //new Cesium.Cartesian3(-2457919.937615054, -4790818.832832404,3435047.293539871)
  ```

- 直接new Cartesian3：

  ``` js
  new Cesium.Cartesian3(-2457919.937615054, -4790818.832832404,3435047.293539871)
  ```

  

