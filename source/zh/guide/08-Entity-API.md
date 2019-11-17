# Entity-API 与地球交互

[Entity](https://cesium.com/docs/cesiumjs-ref-doc/Entity.html)

属性：

| 名称           | 类型                                                         | 描述                                               |
| :------------- | :----------------------------------------------------------- | :------------------------------------------------- |
| `id`           | String                                                       | 可选此对象的唯一标识符。如果未提供，则将生成GUID。 |
| `name`         | String                                                       | 可选显示给用户的人类可读名称。它不必是唯一的。     |
| `availability` | [TimeIntervalCollection](https://cesium.com/docs/cesiumjs-ref-doc/TimeIntervalCollection.html) | 可选与此对象关联的可用性（如果有）。               |
| `show`         | boolean                                                      | 可选的布尔值，指示是否显示实体及其子级。           |
| `description`  | [Property](https://cesium.com/docs/cesiumjs-ref-doc/Property.html) | 可选的字符串属性，用于为此实体指定HTML描述。       |
| `position`     | [PositionProperty](https://cesium.com/docs/cesiumjs-ref-doc/PositionProperty.html) | 可选一个指定实体位置的属性。                       |
| `orientation   | [Property](https://cesium.com/docs/cesiumjs-ref-doc/Property.html) | 可选一个指定实体方向的属性。                       |

可添加的Graphics 图案：

| option           | 类型                                                         | 描述                               |
| ---------------- | ------------------------------------------------------------ | ---------------------------------- |
| `billboard`      | [BillboardGraphics](https://cesium.com/docs/cesiumjs-ref-doc/BillboardGraphics.html) | 可选与此广告实体关联的广告牌。     |
| `box`            | [BoxGraphics](https://cesium.com/docs/cesiumjs-ref-doc/BoxGraphics.html) | 可选与此实体关联的框。             |
| `corridor`       | [CorridorGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGraphics.html) | 可选与此实体关联的走廊。           |
| `cylinder`       | [CylinderGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html) | 可选要与此实体关联的圆柱体。       |
| `ellipse`        | [EllipseGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipseGraphics.html) | 可选与此实体关联的椭圆。           |
| `ellipsoid`      | [EllipsoidGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGraphics.html) | 可选与此实体关联的椭球。           |
| `label`          | [LabelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/LabelGraphics.html) | 可选的options.label与此实体关联。  |
| `model`          | [ModelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/ModelGraphics.html) | 可选与该实体关联的模型。           |
| `path`           | [PathGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html) | 可选与此实体关联的路径。           |
| `plane`          | [PlaneGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PlaneGraphics.html) | 可选与此实体关联的平面。           |
| `point`          | [PointGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PointGraphics.html) | 可选与此实体关联的点。             |
| `polygon`        | [PolygonGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGraphics.html) | 可选要与此实体关联的多边形。       |
| `polyline`       | [PolylineGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineGraphics.html) | 可选与此实体关联的折线。           |
| `polylineVolume` | [PolylineVolumeGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGraphics.html) | 可选的polylineVolume与此实体关联。 |
| `rectangle`      | [RectangleGraphics](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGraphics.html) | 可选要与此实体关联的矩形。         |
| `wall`           | [WallGraphics](https://cesium.com/docs/cesiumjs-ref-doc/WallGraphics.html) | 可选与此实体关联的墙。             |

举例：

``` js
        var videoElement = document.getElementById('trailer'); //获得video对象
        var sphere = viewer.entities.add({//添加实体
            name: 'video plane outline',
            position: Cesium.Cartesian3.fromDegrees(-79, 39, 0),
            plane: {//面对象
                plane: new Cesium.Plane(Cesium.Cartesian3.UNIT_Z, 0.0),
                dimensions: new Cesium.Cartesian2(400.0, 217.5),
                fill: true,
                outline: true,
                material: videoElement //指定材质
            },
            polygon: {//不规则多边形
                hierarchy: Cesium.Cartesian3.fromDegreesArray([
                    -79, 39,
                    -79.015, 39,
                    -79.02, 39.01,
                    -79, 39.01
                ]),
                material: videoElement //指定材质
            }
        });
```



## DataSource

## Scene.pick

``` js
var scene = viewer.scene;
//添加一个左键点击事件
viewer.screenSpaceEventHandler.setInputAction(function (movement) {
    //拾取
    var feature = scene.pick(movement.position);
    if (feature instanceof Cesium.Cesium3DTileFeature) {
        //查看拾取到构件属性
        var propertyNames = feature.getPropertyNames();
        var length = propertyNames.length;
        for (var i = 0; i < length; ++i) {
            var propertyName = propertyNames[i];
            console.log(propertyName + ': ' + feature.getProperty(propertyName));
        }
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
```



## Property