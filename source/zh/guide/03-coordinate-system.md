# cesium 坐标系统

## [WGS84](https://baike.baidu.com/item/WGS84/4380144?fr=aladdin)坐标系

- 长半轴：6378137.0
- [Cartographic](https://cesium.com/docs/cesiumjs-ref-doc/Cartographic.html) 制图坐标（longitude，latitude，height），对应经纬度坐标，弧度制，主要用在用户接口上。方便理解、直观。
- [Cartesian3](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html) 笛卡尔直角坐标系（x,y,z）做空间计算用

坐标转换：

- Cartographic -> [Cartographic.toCartesian](https://cesium.com/docs/cesiumjs-ref-doc/Cartographic.html#.toCartesian) : Cartesian3 
- Cartesian3    -> [Cartographic.fromCartesian](https://cesium.com/docs/cesiumjs-ref-doc/Cartographic.html#.fromCartesian) : Cartographic 

Cartesian3一些常用API:

- [Cartesian3.clone](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html#.clone)
  复制Cartesian3实例。
- [Cartesian3.distance](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html#.distance)
  计算两点之间的距离。
- [Cartesian3.dot](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html#.dot)
  计算两个笛卡尔的点（标量）乘积。
- [Cartesian3.cross](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html#.cross)
  计算两个笛卡尔的叉（外）乘积。
- [Cartesian3.normalize](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html#.normalize)
  计算提供的笛卡尔坐标系的标准化形式，归一化

> 注意传入参数末尾参数result，为了优化内存使用，传入result，计算后结果赋值给该result，可复用，不传则会创建一个result。

![](../../.vuepress/public/img/coordinate-system.jpg)

cesium 坐标系中心点在地心原点。单位米。

Cesium的坐标是以地心为原点，一向指向南美洲(X 经度0)，一向指向亚洲(Y)，一向指向北极州(Z)

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

  

