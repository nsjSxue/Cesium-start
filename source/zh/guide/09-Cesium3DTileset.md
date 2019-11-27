# Cesium3DTileset 让场景更细致更真实

## 3d tile特点

- 3d tiles的特点 [https://cesium.com/blog/2015/08/10/introducing-3d-tiles/](https://cesium.com/blog/2015/08/10/introducing-3d-tiles/)
- 协议完全开放：任何组织机构都可以用此标准来定义自己的数据。
- 渐进加载和渲染：这是3dtiles的主要目的，采用HLOD技术，保证只加载和渲染和当前精度匹配的数据。
- 面向三维空间：定义在三维空间中，不仅仅是点、线、面等常规二维数据
- 可交互：支持鼠标选择和高亮
- 样式可配置：根据对象属性修改对象的显示样式。
- 更强的适应性：空间索引不仅仅支持常规四叉树，可以根据数据内容动态构建索引树。
- 更强的灵活性：动态调整数据加载精度
- 更广泛的数据支持：**点云(points)、三维模型(b3dm,i3dm)、甚至地形、矢量(vctr)都可以用3d tiles格式定义**。
- 精度：使用矩阵偏移解决大坐标值的漂移问题
- 实时的：支持动态数据

## [Cesium3DTile](https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTile.html)类

点云(pnts)、三维模型(b3dm,i3dm)、甚至地形、矢量(vctr)都可以用3d tiles格式定义。

## [Cesium3DTileset](https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html)类

举例：

``` js
var tileset = scene.primitives.add(new Cesium.Cesium3DTileset({
     url : 'http://localhost:8002/tilesets/Seattle/tileset.json'
}));
viewer.scene.primitives.add(tileset);
viewer.flyTo(tileset);
```

### 高度调整

``` js
//readyPromise 异步
tileset.readyPromise.then(function (argument) {
    var heightOffset = 20.0;//高度 抬升
    var boundingSphere = tileset.boundingSphere;//包围球
    var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);//包围求中心点
    var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);//地表
    var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, heightOffset);//沿Z轴抬升 heightOffset
    var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
    tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
});
```

``` js
//经纬度高度 一起调整  仅限原数据中 root.transform 使用这种方式计算的
tileset.readyPromise.then(function (argument) {
    var position = Cesium.Cartesian3.fromDegrees(106.540585, 29.558622, 20);
    //中心位置调整
    var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
    tileset._root.transform = mat;
});
```



## [Cesium3DTileStyle](https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileStyle.html)类

举例：

``` js
tileset.style = new Cesium.Cesium3DTileStyle({
    color : {
        conditions : [
            ['${Height} >= 100', 'color("purple", 0.5)'],
            ['${Height} >= 50', 'color("red")'],
            ['true', 'color("blue")']
        ]
    },
    show : '${Height} > 0',
    meta : {
        description : '"Building id ${id} has height ${Height}."'
    }
});
```


## 参考
- [CESIUM3DTITLE 调整位置](http://www.freesion.com/article/6294140309/)
- [Cesium学习笔记（五）：3D 模型](https://blog.csdn.net/UmGsoil/article/details/74572877)