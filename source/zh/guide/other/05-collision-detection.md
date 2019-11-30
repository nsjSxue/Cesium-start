---
sidebarDepth: 5
---
# 碰撞检测

 Cesium.Ray.getPoint （ray，t，result） → Cartesian3

``` js
//获取画布尺寸
var myCanvas = api.viewer.canvas; 
var myCanvas_rect = myCanvas.getBoundingClientRect(); 
var widths = myCanvas_rect.width; 
var heights = myCanvas_rect.height;
console.log(widths,heights);
//相机瞄点
console.log(widths/2,heights/2);
```

- 相机水平方向向量 `direction`
- 相机位置 `position`
- 指定水平方向碰撞距离`d` [0,d]

以上条件可以实例一个射线： `new Cesium.Ray(origin, direction)`



相机开启碰撞分析：
``` js
scene.screenSpaceCameraController.enableIndoorColliDetection =true;
```

场景 scene:
``` js
 // Pick a new feature
var pickedFeature = viewer.scene.pick(movement.endPosition);//坐标为画布上平面坐标
if (!Cesium.defined(pickedFeature)) {
    nameOverlay.style.display = 'none';
    return;
}
```

[drillPick(windowPosition, limit, width, height)](https://cesium.com/docs/cesiumjs-ref-doc/Scene.html#drillPick)

## 参考
- [Cesium3DTile.distanceToTile](https://github.com/AnalyticalGraphicsInc/cesium/blob/2461b55f72bed959ed098a7520625601e6850e6b/Source/Scene/Cesium3DTile.js#L1022-L1025)
- [Cesium3DTile.distanceToTileCenter](https://github.com/AnalyticalGraphicsInc/cesium/blob/2461b55f72bed959ed098a7520625601e6850e6b/Source/Scene/Cesium3DTile.js#L1027-L1042)
- [[官方示例]3D Tiles Feature Picking 构件拾取](https://sandcastle.cesium.com/index.html?src=3D%20Tiles%20Feature%20Picking.html&label=All)
