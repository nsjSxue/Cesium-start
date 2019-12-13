# Cesium 中的pick

在cesium中，想获取不同的对象，需要通过pick方法来进行拾取，但是Cesium中有多种pick的方法，例如:
- scene中有pick、pickPosition、及drillPick等
- camera中有getPickRay、pickEllipsoid等
- globel中有pick

先来分类说一下各个pick的作用：

scene中（一般用来获取entity对象）：

- pick：`scene.pick`可以通过此方法获取到pick对象，通过pick.id即可拾取当前的entity对象，也可以获取Cesium3DTileFeature对象；
- drillPick：`scene.drillPick(click.position)`是从当前鼠标点击位置获取entity的集合，然后通过for循环可以获取当前坐标下的所有entity；
- pickPosition：通过`viewer.scene.pickPosition(movement.position)`获取，可以获取场中任意点击处的对应的世界坐标。（高程不精确）

> pick与drillPick的区别：pick只可获取一个entity对象（如该位置存在多个entity，哪怕面点线不在同一高度，面entity都可能会盖住点线entity），但drillPick可获取当前坐标下的多个对象；

camera和globel中的pick：

这两个里面的pick一般搭配使用，通过camera中的getPickRay获取ray（射线），然后通过globel中的pick方法，获取世界坐标，如下面的地形坐标的获取；

1. 通过pick进行地形上的坐标的获取

这个是常用的方法，当你想获取当前鼠标位置的三维坐标时，经常使用到这个方法：

第一步：通过camera的getPickRay，将当前的屏幕坐标转为ray（射线）；

``` js
viewer.camera.getPickRay(windowCoordinates);
```
第二步：找出ray和地形的交点，即可求出三维世界坐标
```js
globe.pick(ray, scene);
```

2. 通过pick获取entity 
``` js
 handler.setInputAction(function (movement) {
        var pick = viewer.scene.pick(movement.endPosition);  //获取的pick对象
        var pickedEntity = Cesium.defined(pick) ? pick.id : undefined; //pick.id即为entity
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
```
##

``` js
/* 根据屏幕位置获取经纬度 */
function getCartographicByWindowPosition(windowPosition) {
	var pick1 = new Cesium.Cartesian2(position.x,position.y);
	var cartesian = viewer.scene.globe.pick(viewer.camera.getPickRay(pick1),viewer.scene);
	var ellipsoid = viewer.scene.globe.ellipsoid;
	var cartesian3 = new Cesium.Cartesian3(cartesian.x,cartesian.y,cartesian.z);
	var cartographic = ellipsoid.cartesianToCartographic(cartesian3);
	var lat=Cesium.Math.toDegrees(cartographic.latitude);
	var lng=Cesium.Math.toDegrees(cartographic.longitude);
	console.log('左键单击事件：',"lng:"+lng+", lat:"+lat);
	return [lat,lng];
}
```
## 获取相机视野范围

``` js
//视野范围
var re = viewer.camera.computeViewRectangle();
//返回 re=Rectangle {
//         west: 1.900335469218777,
//         south: 0.5968981529134573,
//         east: 1.900355394617851,
//         north: 0.5969145303070917}

//计算经纬度
var lon = (re. west/ Math.PI * 180+re.east/ Math.PI * 180)/2;
var lat = (re.north/ Math.PI * 180+re.south/ Math.PI * 180)/2;
console.log(lon,lat);
```


## 参考

- [Cesium 中的pick讲解](https://blog.csdn.net/caozl1132/article/details/90257043)