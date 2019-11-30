---
sidebarDepth: 5
---
# 碰撞检测

 Cesium.Ray.getPoint （ray，t，result） → Cartesian3

``` js
 // Pick a new feature
var pickedFeature = viewer.scene.pick(movement.endPosition);
if (!Cesium.defined(pickedFeature)) {
    nameOverlay.style.display = 'none';
    return;
}
```

## 参考
- [Cesium3DTile.distanceToTile](https://github.com/AnalyticalGraphicsInc/cesium/blob/2461b55f72bed959ed098a7520625601e6850e6b/Source/Scene/Cesium3DTile.js#L1022-L1025)
- [Cesium3DTile.distanceToTileCenter ](https://github.com/AnalyticalGraphicsInc/cesium/blob/2461b55f72bed959ed098a7520625601e6850e6b/Source/Scene/Cesium3DTile.js#L1027-L1042)
- [[官方示例]3D Tiles Feature Picking 构件拾取](https://sandcastle.cesium.com/index.html?src=3D%20Tiles%20Feature%20Picking.html&label=All)
