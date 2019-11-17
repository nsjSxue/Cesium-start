# 相机及视角

## Camera类-去哪儿，随心所欲

cesium中的相机：

`Cesium.Viewer.camera`:[Camera](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html)

Camera常用属性：

- [position](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html#position) 相机在世界坐标中的位置，[direction](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html#direction) 相机的观看方向，[right](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html#right) 相机的朝右方向。，[up](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html#up) 相机的向上方向。

  ![](../../.vuepress/public/img/camera-position-driection-right-up.png)

- [heading](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html#heading)(朝向)、[pith](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html#pitch)(俯仰) 、 [roll](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html#roll)(翻滚)

  ![](../../.vuepress/public/img/camera-heading-roll-pitch.png)
  
  图中`g`是重力方向与`Z`相反。

Camera有几个常用API：

- [setView(options)](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html#setView) Sets the camera position, orientation and transform. 设置相机的位置、方向和变换。
- [ flyTo(options)](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html#flyTo) Flies the camera from its current position to a new position. 使相机从当前位置飞到新位置。
- [HeadingPitchRange(heading, pitch, range) ](https://cesium.com/docs/cesiumjs-ref-doc/HeadingPitchRange.html)
- [lookAt(target, offset)](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html#lookAt)

## setView(options)

官方示例：

``` js
// 1. Set position with a top-down view 设置相机位置
viewer.camera.setView({
    destination : Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0)
});

// 2 Set view with heading, pitch and roll
viewer.camera.setView({
    destination : cartesianPosition,
    orientation: {
        heading : Cesium.Math.toRadians(90.0), // east, default value is 0.0 (north) 左右摆头
        pitch : Cesium.Math.toRadians(-90),    // default value (looking down) 上下抬头
        roll : 0.0                             // default value
    }
});

// 3. Change heading, pitch and roll with the camera position remaining the same.
viewer.camera.setView({
    orientation: {
        heading : Cesium.Math.toRadians(90.0), // east, default value is 0.0 (north)
        pitch : Cesium.Math.toRadians(-90),    // default value (looking down)
        roll : 0.0                             // default value
    }
});


// 4. View rectangle with a top-down view
viewer.camera.setView({
    destination : Cesium.Rectangle.fromDegrees(west, south, east, north)
});

// 5. Set position with an orientation using unit vectors.
viewer.camera.setView({
    destination : Cesium.Cartesian3.fromDegrees(-122.19, 46.25, 5000.0),
    orientation : {
        direction : new Cesium.Cartesian3(-0.04231243104240401, -0.20123236049443421, -0.97862924300734),
        up : new Cesium.Cartesian3(-0.47934589305293746, -0.8553216253114552, 0.1966022179118339)
    }
});
```

查看北京城：

``` js
viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 15000.0),
    orientation: {
        heading: Cesium.Math.toRadians(0.0), // east, default value is 0.0 (north)
        pitch: Cesium.Math.toRadians(-90), // default value (looking down)
        roll: 0.0 // default value
    }
});
```

## flyTo(options)

官方示例：

``` js
// 1. Fly to a position with a top-down view
viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0)
});

// 2. Fly to a Rectangle with a top-down view
viewer.camera.flyTo({
    destination : Cesium.Rectangle.fromDegrees(west, south, east, north)
});

// 3. Fly to a position with an orientation using unit vectors.
viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-122.19, 46.25, 5000.0),
    orientation : {
        direction : new Cesium.Cartesian3(-0.04231243104240401, -0.20123236049443421, -0.97862924300734),
        up : new Cesium.Cartesian3(-0.47934589305293746, -0.8553216253114552, 0.1966022179118339)
    }
});

// 4. Fly to a position with an orientation using heading, pitch and roll.
viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-122.19, 46.25, 5000.0),
    orientation : {
        heading : Cesium.Math.toRadians(175.0),
        pitch : Cesium.Math.toRadians(-35.0),
        roll : 0.0
    }
});
```

查看北京城：

``` js
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 15000.0),
    orientation: {
        heading: Cesium.Math.toRadians(0.0), // east, default value is 0.0 (north)
        pitch: Cesium.Math.toRadians(-90), // default value (looking down)
        roll: 0.0 // default value
    }
});
```

[在线预览](https://sogrey.github.io/Cesium-start-Example/examples/camera/view-beijing.html)

## 记录视角

同理，想要标记某个位置和角度，下次直接进入，可以在选好的角度上按<a href="#记录视角" class="btn-gradient red mini">F12</a>进入开发者工具输入

- `viewer.camera.heading`
-  `viewer.camera.pitch` 
-  `viewer.camera.position`

回车可以得到信息

``` js
//获取视角
function getCamera() {
    return {
        position: viewer.camera.position,
        heading: viewer.camera.heading,
        pitch: viewer.camera.pitch
    }
}
```

``` js
//设置视角
viewer.camera.flyTo({
    destination: getCamera().position,
    orientation: {
        heading: getCamera().heading, // east, default value is 0.0 (north)
        pitch: getCamera().pitch, // default value (looking down)
        roll: 0.0 // default value
    }
});
```

[在线预览](https://sogrey.github.io/Cesium-start-Example/examples/camera/view-beijing.html)

## 设置默认视角

cesium默认视角定位在美国，也就是点击`HomeButton`转向的视角，怎么修改默认视角呢？

需要在**创建`Viewer`之前**执行下面代码：

``` js
//设置默认视角在中国
var china = Cesium.Rectangle.fromDegrees(100,10,120,70);
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = china;

var viewer  = new Cesium.Viewer("cesiumdiv");
```

## Cartesian3和Cartographic

- [Cartographic](https://cesium.com/docs/cesiumjs-ref-doc/Cartographic.html) 制图坐标（longitude，latitude，height），对应经纬度坐标，弧度制，主要用在用户接口上。方便理解、直观。
- [Cartesian3](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html) 笛卡尔直角坐标系（x,y,z）做空间计算用

坐标转换：

- Cartographic -> [Cartographic.toCartesian](https://cesium.com/docs/cesiumjs-ref-doc/Cartographic.html#.toCartesian) : Cartesian3 
- Cartesian3   -> [Cartographic.fromCartesian](https://cesium.com/docs/cesiumjs-ref-doc/Cartographic.html#.fromCartesian) : Cartographic 

Cartesian3一些常用API:

- [Cartesian3.clone](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html#.clone)   复制Cartesian3实例。
- [Cartesian3.distance](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html#.distance)   计算两点之间的距离。
- [Cartesian3.dot](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html#.dot)  计算两个笛卡尔的点（标量）乘积。
- [Cartesian3.cross](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html#.cross)  计算两个笛卡尔的叉（外）乘积。
- [Cartesian3.normalize](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html#.normalize) 笛卡尔标准化，归一化


<style>
/**按键样式*/
.btn-gradient{text-decoration:none;color:white;padding:10px 30px;display:inline-block;position:relative;border:1px solid rgba(0,0,0,0.21);border-bottom:4px solid rgba(0,0,0,0.21);border-radius:4px;text-shadow:0 1px 0 rgba(0,0,0,0.15)}.btn-gradient.cyan{background:rgba(27,188,194,1);background:-webkit-gradient(linear,0 0,0 100%,from(rgba(27,188,194,1)),to(rgba(24,163,168,1)));background:-webkit-linear-gradient(rgba(27,188,194,1) 0,rgba(24,163,168,1) 100%);background:-moz-linear-gradient(rgba(27,188,194,1) 0,rgba(24,163,168,1) 100%);background:-o-linear-gradient(rgba(27,188,194,1) 0,rgba(24,163,168,1) 100%);background:linear-gradient(rgba(27,188,194,1) 0,rgba(24,163,168,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#1bbcc2',endColorstr='#18a3a8',GradientType=0)}.btn-gradient.red{background:rgba(250,90,90,1);background:-webkit-gradient(linear,0 0,0 100%,from(rgba(250,90,90,1)),to(rgba(232,81,81,1)));background:-webkit-linear-gradient(rgba(250,90,90,1) 0,rgba(232,81,81,1) 100%);background:-moz-linear-gradient(rgba(250,90,90,1) 0,rgba(232,81,81,1) 100%);background:-o-linear-gradient(rgba(250,90,90,1) 0,rgba(232,81,81,1) 100%);background:linear-gradient(rgba(250,90,90,1) 0,rgba(232,81,81,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fa5a5a',endColorstr='#e85151',GradientType=0)}.btn-gradient.orange{background:rgba(255,105,30,1);background:-webkit-gradient(linear,0 0,0 100%,from(rgba(255,105,30,1)),to(rgba(230,95,28,1)));background:-webkit-linear-gradient(rgba(255,105,30,1) 0,rgba(230,95,28,1) 100%);background:-moz-linear-gradient(rgba(255,105,30,1) 0,rgba(230,95,28,1) 100%);background:-o-linear-gradient(rgba(255,105,30,1) 0,rgba(230,95,28,1) 100%);background:linear-gradient(rgba(255,105,30,1) 0,rgba(230,95,28,1) 100%)}.btn-gradient.blue{background:rgba(102,152,203,1);background:-moz-linear-gradient(top,rgba(102,152,203,1) 0,rgba(92,138,184,1) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0%,rgba(102,152,203,1)),color-stop(100%,rgba(92,138,184,1)));background:-webkit-linear-gradient(top,rgba(102,152,203,1) 0,rgba(92,138,184,1) 100%);background:-o-linear-gradient(top,rgba(102,152,203,1) 0,rgba(92,138,184,1) 100%);background:-ms-linear-gradient(top,rgba(102,152,203,1) 0,rgba(92,138,184,1) 100%);background:linear-gradient(to bottom,rgba(102,152,203,1) 0,rgba(92,138,184,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#6698cb',endColorstr='#5c8ab8',GradientType=0)}.btn-gradient.purple{background:rgba(203,153,197,1);background:-moz-linear-gradient(top,rgba(203,153,197,1) 0,rgba(181,134,176,1) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0%,rgba(203,153,197,1)),color-stop(100%,rgba(181,134,176,1)));background:-webkit-linear-gradient(top,rgba(203,153,197,1) 0,rgba(181,134,176,1) 100%);background:-o-linear-gradient(top,rgba(203,153,197,1) 0,rgba(181,134,176,1) 100%);background:-ms-linear-gradient(top,rgba(203,153,197,1) 0,rgba(181,134,176,1) 100%);background:linear-gradient(to bottom,rgba(203,153,197,1) 0,rgba(181,134,176,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#cb99c5',endColorstr='#b586b0',GradientType=0)}.btn-gradient.yellow{background:rgba(240,210,100,1);background:-webkit-gradient(linear,0 0,0 100%,from(rgba(240,210,100,1)),to(rgba(229,201,96,1)));background:-webkit-linear-gradient(rgba(240,210,100,1) 0,rgba(229,201,96,1) 100%);background:-moz-linear-gradient(rgba(240,210,100,1) 0,rgba(229,201,96,1) 100%);background:-o-linear-gradient(rgba(240,210,100,1) 0,rgba(229,201,96,1) 100%);background:linear-gradient(rgba(240,210,100,1) 0,rgba(229,201,96,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f0d264',endColorstr='#e5c960',GradientType=0)}.btn-gradient.green{background:rgba(130,200,160,1);background:-moz-linear-gradient(top,rgba(130,200,160,1) 0,rgba(130,199,158,1) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0%,rgba(130,200,160,1)),color-stop(100%,rgba(130,199,158,1)));background:-webkit-linear-gradient(top,rgba(130,200,160,1) 0,rgba(130,199,158,1) 100%);background:-o-linear-gradient(top,rgba(130,200,160,1) 0,rgba(130,199,158,1) 100%);background:-ms-linear-gradient(top,rgba(130,200,160,1) 0,rgba(130,199,158,1) 100%);background:linear-gradient(to bottom,rgba(130,200,160,1) 0,rgba(124,185,149,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#82c8a0',endColorstr='#82c79e',GradientType=0)}.btn-gradient.red:active{background:#e35252}.btn-gradient.orange:active{background:#e8601b}.btn-gradient.cyan:active{background:#169499}.btn-gradient.blue:active{background:#608fbf}.btn-gradient.purple:active{background:#bd8eb7}.btn-gradient.yellow:active{background:#dbc05b}.btn-gradient.green:active{background:#72b08e}.btn-gradient{margin:5px}a[class*="btn"]{text-decoration:none}.btn-gradient.mini{padding: 4px 12px;font-size: 12px;color: white;text-decoration: none;}a.btn-gradient.mini:hover,a.btn-gradient.mini:focus,a.btn-gradient.mini:focus-within{text-decoration: none;}
/**按键样式 end*/
</style>
