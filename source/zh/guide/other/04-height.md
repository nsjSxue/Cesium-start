# Cesium 各高度的获取

## 1. 地形高度的获取

- 方法a: 通过事件获取到像素坐标，然后转为世界坐标，再求地形高度
``` js
var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
handler.setInputAction(function(evt) {
    var ray=viewer.camera.getPickRay(evt.position);
    var cartesian=viewer.scene.globe.pick(ray,viewer.scene);
    var cartographic=Cesium.Cartographic.fromCartesian(cartesian);
    var height = cartographic.height//地形高度。
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
```

- 方法b: 先转为经纬度，通过viewer.scene.globe.getHeight(cartographic) 直接求地形高度，cartographic.height可以为0

- 方法c: Cesium.sampleTerrain 获取简单地形高度；（异步）

- 方法d: Cesium.sampleTerrainMostDetailed 获取精确地形高度 ；（异步）

地形高度获取小结:如果你是在事件里获取可用a方法，如果你要是想实时获取可用b，其它情形可用c


## 2. 模型表面高度的获取

``` js
var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
handler.setInputAction(function(evt) {
    var scene = viewer.scene;
    if (scene.mode !== Cesium.SceneMode.MORPHING) {
        var pickedObject = scene.pick(evt.position);
        if (scene.pickPositionSupported && Cesium.defined(pickedObject) && pickedObject.node) {
            var cartesian = viewer.scene.pickPosition(evt.position);
            if (Cesium.defined(cartesian)) {
                var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                var lng = Cesium.Math.toDegrees(cartographic.longitude);
                var lat = Cesium.Math.toDegrees(cartographic.latitude);
                var height = cartographic.height;//模型高度
                mapPosition={x:lng,y:lat,z:height}
            }
        }
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
```

## 参考

- [Cesium 各高度的获取](https://blog.csdn.net/caozl1132/article/details/90247208)