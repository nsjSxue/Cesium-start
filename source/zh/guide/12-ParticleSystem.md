---
sidebarDepth: 5
---

# ParticleSystem 粒子系统

## 什么是粒子系统？

粒子系统是一种图形技术，可以模拟复杂的基于物理的效果。粒子系统是小图像的集合，当一起查看时，它们会形成更复杂的“模糊”对象，例如火，烟，天气或烟火。通过使用诸如初始位置，速度和寿命之类的属性指定单个粒子的行为，可以控制这些复杂的效果。

cesium 中粒子效果相关：

- [Particle](https://cesium.com/docs/cesiumjs-ref-doc/Particle.html?classFilter=Particle) 粒子系统发射的粒子。
- [ParticleBurst](https://cesium.com/docs/cesiumjs-ref-doc/ParticleBurst.html?classFilter=Particle) 表示在系统生命周期中给定时间的粒子系统中的粒子爆发。
- [ParticleEmitter](https://cesium.com/docs/cesiumjs-ref-doc/ParticleEmitter.html?classFilter=Particle) 一个从ParticleSystem初始化Particle的对象。此类型描述一个接口，不能直接实例化。
- [ParticleSystem](https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html?classFilter=Particle) 粒子系统管理粒子集合的更新和显示。

一个基本粒子系统代码：

``` js
var particleSystem = viewer.scene.primitives.add(new Cesium.ParticleSystem({
    image : '../../SampleData/smoke.png',//图片资源
    imageSize : new Cesium.Cartesian2(20, 20),//图像大小
    startScale : 1.0,//开始缩放比
    endScale : 4.0,//死亡时缩放比
    particleLife : 1.0,
    speed : 5.0, //速度
    emitter : new Cesium.CircleEmitter(0.5),//发射器 圆形粒子发射器
    emissionRate : 5.0,
    modelMatrix : entity.computeModelMatrix(viewer.clock.startTime, new Cesium.Matrix4()),
    lifetime : 16.0 //寿命
}));
```



## Particle 类

粒子系统发射的粒子。

::: tip 构造函数
``` js
new Cesium.Particle(options)
```
:::

可选参数`options`:

| 名称         | 类型                                                         | 默认值                     | 描述                                                         |
| :----------- | :----------------------------------------------------------- | :------------------------- | :----------------------------------------------------------- |
| `mass`       | Number                                                       | `1.0`                      | `可选`粒子的质量（以千克为单位）。                           |
| `position`   | [Cartesian3](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html) | `Cartesian3.ZERO`          | `可选`粒子在世界坐标中的初始位置。                           |
| `velocity`   | [Cartesian3](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html) | `Cartesian3.ZERO`          | `可选`世界坐标系中粒子的速度向量。                           |
| `life`       | Number                                                       | `Number.MAX_VALUE`         | `可选`世界坐标系中粒子的速度向量。                           |
| `image`      | Object                                                       |                            | `可选`用于广告牌的URI，HTMLImageElement或HTMLCanvasElement。 |
| `startColor` | [Color](https://cesium.com/docs/cesiumjs-ref-doc/Color.html) | `Color.WHITE`              | `可选`粒子诞生时的颜色。                                     |
| `endColor`   | [Color](https://cesium.com/docs/cesiumjs-ref-doc/Color.html) | `Color.WHITE`              | `可选`粒子死亡时的颜色。                                     |
| `startScale` | Number                                                       | `1.0`                      | `可选`粒子诞生时的比例。                                     |
| `endScale`   | Number                                                       | `1.0`                      | `可选`死亡时粒子的比例。                                     |
| `imageSize`  | [Cartesian2](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian2.html) | `new Cartesian2(1.0, 1.0)` | `可选`尺寸，宽度乘高度，以像素为单位缩放粒子图像。           |

## ParticleBurst 类

表示在系统生命周期中给定时间的粒子系统中的粒子爆发。 控制每秒发射多少粒子，从而改变系统中粒子的密度。

::: tip 构造函数

```js
new Cesium.ParticleBurst(options)
```

:::

参数`options`:

| 名称      | 类型   | 默认值 | 描述                                                       |
| :-------- | :----- | :----- | :--------------------------------------------------------- |
| `time`    | Number | `0.0`  | `可选`粒子系统生命周期开始后发生爆发的时间（以秒为单位）。 |
| `minimum` | Number | `0.0`  | `可选`突发中发射的最小粒子数。                             |
| `maximum` | Number | `50.0` | `可选`爆发中发射的最大粒子数。                             |

指定一个`burst`对象数组，以在指定的时间发射粒子爆发（[官方示例](https://sandcastle.cesium.com/?src=Particle%2520System.html)）。这会增加粒子系统的多样性或爆炸性。

将此属性添加到您的中`particleSystem`。

``` js
bursts : [
    new Cesium.ParticleBurst({time : 5.0, minimum : 300, maximum : 500}),
    new Cesium.ParticleBurst({time : 10.0, minimum : 50, maximum : 100}),
    new Cesium.ParticleBurst({time : 15.0, minimum : 200, maximum : 300})
]
```

在给定的时间，这些脉冲将在最小和最大粒子之间发射。

## ParticleEmitter 类

一个从`ParticleSystem`初始化`Particle`的对象。此类型描述一个接口，不能直接实例化。

当粒子诞生时，其初始位置和速度矢量受的控制`ParticleEmitter`。发射器每秒会产生由`emissionRate`参数指定的一定数量的粒子，并根据发射器类型使用随机速度进行初始化。

对应`ParticleSystem`的`emitter`:

``` js
var fireSystem = new Cesium.ParticleSystem({
    image: '../../assets/img/fire.png',
    emitter: new Cesium.ConeEmitter(Cesium.Math.toRadians(20.0)),//粒子发射器
    imageSize: new Cesium.Cartesian2(40, 40),
    emissionRate: 15.0,
    lifetime: 16.0,
    modelMatrix: computeModelMatrix(modelEntity, Cesium.JulianDate.now()),//位置
});
scene.primitives.add(fireSystem);
```



内置的几个发射器对象：

- [BoxEmitter](https://cesium.com/docs/cesiumjs-ref-doc/BoxEmitter.html) 在箱子内发射粒子的粒子发射器。粒子将随机放置在盒子中，并且具有从盒子中心发出的初始速度。
  在一个盒子内随机采样的位置初始化粒子，并将它们从六个盒子面之一中引出。它接受一个[Cartesian3](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html) 参数，该参数指定盒子的宽度，高度和深度尺寸。
  
  参数：
  
  - `dimensions`:[Cartesian3](https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html) 盒子的宽度，高度和深度尺寸。正方体盒子
  
  - ``` js
    //默认值
    new Cartesian3(1.0, 1.0, 1.0) 
    ```
  
- [CircleEmitter](https://cesium.com/docs/cesiumjs-ref-doc/CircleEmitter.html) 从圆形发射粒子的粒子发射器。粒子将定位在一个圆内，并且具有沿z向量移动的初始速度。

  参数：

  - `radius` :Number 圆的半径，以米为单位。

  - ``` js
    //默认值 1.0
    new Cesium.CircleEmitter(1.0)
    ```

- [ConeEmitter](https://cesium.com/docs/cesiumjs-ref-doc/ConeEmitter.html) 在圆锥体内发射粒子的粒子发射器。粒子将位于圆锥体的尖端，并且初始速度朝向底部。

  参数：

  - `angle`:Number 圆锥角（以弧度为单位）。

  - ```js
    //默认值 30度角对应弧度
    new Cesium.ConeEmitter(Cesium.Math.toRadians(30.0))
    ```

- [SphereEmitter](https://cesium.com/docs/cesiumjs-ref-doc/SphereEmitter.html) 在球体内发射粒子的粒子发射器。粒子将随机放置在球体内，并且具有从球体中心发出的初始速度。

  参数：

  - `radius`:Number 球体的半径，以米为单位。默认1.0

  - ``` js
    //默认值1.0
    new Cesium.SphereEmitter(1.0)
    ```

## ParticleSystem 类

粒子系统管理粒子集合的更新和显示。

### 粒子发射速率

`emissionRate` 属性控制每秒生成多少个粒子，用来调整粒子密度。值越大每秒产生粒子数越多，粒子越密集。

``` js
new Cesium.ParticleSystem({
    emissionRate: 15.0,
    //...
});
```


### 粒子/粒子系统的生命周期

一些参数控制了粒子系统的**生命周期**，默认粒子系统一直运行。
 设置`lifetime`属性控制粒子的持续时间，同时需要设置`loop`属性为`false`。`loop`设为`true`，一直循环执行下去。比如设定一个粒子系统运行5秒，5秒后粒子效果结束：

```js
new Cesium.ParticleSystem({
    lifetime: 5.0,
    loop: false,
    //...
});
```
为了每个粒子都有一个随机生命周期，我们可以设置 `minimumParticleLife` 和 `maximumParticleLife`。比如下面的代码设置了粒子生命周期在5秒和10秒之间：

```js
new Cesium.ParticleSystem({
    minimumParticleLife: 5.0,
    maximumParticleLife: 10.0,
    //particleLife: 1.0,
    //...
});
```
设置`particleLife` 属性为5.0 表示设置每个粒子的生命周期是5秒。*如果设置`particleLife` ，` minimumParticleLife` 和`maximumParticleLife`将失效。*

### 粒子样式

#### 贴图(image):

纹理贴图。为粒子`Particle ` 换个皮肤。

``` js
new Cesium.ParticleSystem({
    image: '../../assets/img/fire.png',
    //...
});
```

#### **颜色（[Color](https://cesium.com/docs/cesiumjs-ref-doc/Color.html?classFilter=color)）**

除了设定image属性来控制粒子的纹理外，还可以设定一个颜色值，这个值可以在粒子的生命周期内变化。

下面代码使火焰粒子产生的时候是淡红色，消亡的时候是半透明黄色。

```js
new Cesium.ParticleSystem({
    //color:Cesium.Color.RED,
    startColor: Cesium.Color.YELLOW.withAlpha(0.5),
    endColor: Cesium.Color.RED.withAlpha(0.7),
    //...
})
```

**大小（Size）**

通常粒子大小通过`imageSize`属性控制。如果想设置一个随机大小，每个粒子的宽度在`minimumImageSize.x` 和 `maximumImageSize.x` 之间随机，高度在`minimumImageSize.y` 和 `maximumImageSize.y`之间随机，单位为像素。

```js
new Cesium.ParticleSystem({
    minimumImageSize : new Cesium.Cartesian2(30.0, 30.0),
    maximumImageSize : new Cesium.Cartesian2(60.0, 60.0),
    //...
});
```

和颜色一样，粒子大小的倍率在粒子整个生命周期内，会在`startScale` 和 `endScale`属性之间插值。这个会导致你的粒子随着时间变大或者缩小。

```js
new Cesium.ParticleSystem({
    startScale: 1.0,
    endScale: 4.0,
    //...
});
```

#### **运行速度(Speed)**

发射器控制了粒子的位置和方向，速度通过`speed`参数或者`minimumSpeed`和`maximumSpeed` 参数来控制。

速度越大相同生命周期内运动越远。

```js
new Cesium.ParticleSystem({
    //speed: 5.0,
    minimumSpeed: 5.0,
    maximumSpeed: 10.0,
    //...
});
```

如果设置`speed`将覆盖`minimumSpeed`和`maximumSpeed` 。


#### 位置

粒子系统使用两个转换[矩阵](https://cesium.com/docs/cesiumjs-ref-doc/Matrix4.html)来定位:

-  `modelMatrix` : 把粒子系统从模型坐标系转到世界坐标系。
-  `emitterModelMatrix`  : 在粒子系统的局部坐标系内变换粒子发射器。

我们提供两个属性也是为了方便，当然可以仅仅设置一个，把另一个设置为单位矩阵。为了学习创建这个矩阵，我们尝试把我们的粒子系统相对另一个`entity`。

``` js
new Cesium.ParticleSystem({
    //粒子发生位置,相对于modelEntity
    modelMatrix: computeModelMatrix(modelEntity, Cesium.JulianDate.now()),
    //...
});
```
#### 颗粒质量（mass）

- [`mass`]() 以千克为单位设置最小和最大颗粒质量。默认1.0kg
- [`minimumMass`](https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html?classFilter=particle#minimumMass) 设置粒子质量的最小范围（以千克为单位）。粒子的实际质量将被选择为高于此值的随机量。
- [`maximumMass`](https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html?classFilter=particle#maximumMass)  以千克为单位设置最大粒子质量。粒子的实际质量将选择为低于此值的随机量。

## 方法（Methods）

- [destroy()](https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html?classFilter=particle#destroy) 销毁
- [isDestroyed()](https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html?classFilter=particle#isDestroyed) → Boolean 是否被销毁

## 事件（Events）

### 完成事件 （complete ）

当粒子系统达到其生命周期尽头时触发事件。

### 更新回调（[UpdateCallback](https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html?classFilter=particle#~updateCallback)）

为了提升仿真效果，粒子系统有一个更新函数。这个是个手动更新器，比如对每个粒子模拟重力或者风力的影响，或者除了线性插值之外的颜色插值方式等等。
每个粒子系统在仿真过程种，都会调用更新回调函数来修改粒子的属性。回调函数传过两个参数，一个是粒子本身，另一个是仿真时间步长。大部分物理效果都会修改速率向量来改变方向或者速度。下面是一个粒子响应重力的示例代码：

```js
var gravityScratch = new Cesium.Cartesian3();
/**
 * 用于在每个时间步修改粒子属性的函数。这可以包括力的修改，颜色，大小等。
 * @param {Particle} particle 正在更新的粒子。
 * @param {Number} dt 自上次更新以来的时间（以秒为单位）。
 */
function applyGravity(particle, dt) {
    // 计算每个粒子的向上向量（相对地心） 
    var position = particle.position;
    Cesium.Cartesian3.normalize(position, gravityScratch);
    Cesium.Cartesian3.multiplyByScalar(gravityScratch, viewModel.gravity * dt, gravityScratch);
    particle.velocity = Cesium.Cartesian3.add(particle.velocity, gravityScratch, particle.velocity);
}
```
这个函数计算了一个重力方向，然后使用重力加速度（-9.8米每秒平方）去修改粒子的速度方向。

设置粒子系统的更新函数：

```js
new Cesium.ParticleSystem({
    updateCallback: applyGravity,
    //...
});
```

## 简单封装

//TODO

## 额外的天气效应

使用雾和大气效果来增强可视化效果，并匹配我们试图复制的天气类型。

`hueshift`沿着颜色光谱改变颜色，`saturationShift`改变了视觉实际需要的颜色与黑白的对比程度，`brightnessShift`改变了颜色的生动程度。

雾密度`density`改变了地球上覆盖物与雾的颜色之间的不透明程度。雾的`minimumBrightness`用来使雾变暗。

``` js
scene.skyAtmosphere.hueShift = -0.8;
scene.skyAtmosphere.saturationShift = -0.7;
scene.skyAtmosphere.brightnessShift = -0.33;

scene.fog.density = 0.001;
scene.fog.minimumBrightness = 0.8;
```

查看[示例](https://sogrey.github.io/Cesium-start-Example/examples/ParticleSystem/ParticleSystem.html)

## 遇到问题

### 粒子销毁异常

我在场景中添加了粒子`ParticleSystem`，在执行销毁动作时（[`fireSystem.destroy();`](https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html#destroy)）报如下错误：
``` bash
Cesium.js:250174 An error occurred while rendering.  Rendering has stopped.
undefined
DeveloperError: This object was destroyed, i.e., destroy() was called.
Error
    at new DeveloperError (http://127.0.0.1:8080/libs/cesium/Build/CesiumUnminified/Cesium.js:82:23)
    at ParticleSystem.throwOnDestroyed (http://127.0.0.1:8080/libs/cesium/Build/CesiumUnminified/Cesium.js:29012:23)
    at PrimitiveCollection.update (http://127.0.0.1:8080/libs/cesium/Build/CesiumUnminified/Cesium.js:131007:31)
    at updateAndRenderPrimitives (http://127.0.0.1:8080/libs/cesium/Build/CesiumUnminified/Cesium.js:237258:31)
    at executeCommandsInViewport (http://127.0.0.1:8080/libs/cesium/Build/CesiumUnminified/Cesium.js:237092:17)
    at Scene.updateAndExecuteCommands (http://127.0.0.1:8080/libs/cesium/Build/CesiumUnminified/Cesium.js:236900:17)
    at render (http://127.0.0.1:8080/libs/cesium/Build/CesiumUnminified/Cesium.js:237563:19)
    at tryAndCatchError (http://127.0.0.1:8080/libs/cesium/Build/CesiumUnminified/Cesium.js:237582:17)
    at Scene.render (http://127.0.0.1:8080/libs/cesium/Build/CesiumUnminified/Cesium.js:237657:17)
    at CesiumWidget.render (http://127.0.0.1:8080/libs/cesium/Build/CesiumUnminified/Cesium.js:250222:29)
```
不想使用自动销毁，因为我也不知这把火会烧多久，只有灭火的信号一到，才能去移除它，起初我是使用 `fireSystem.show=false;`不让他显示，但这并不是我想要的，想用事件去移除它，信号一到就删除它。

后来找到另外一种方法，因为我是这样添加粒子的：
``` js
_viewer.scene.primitives.add(particleSystem);
```
想着 `viewer.scene.primitives => PrimitiveCollection` PrimitiveCollection 有添加方法应该也有移除的方法，不负众望，还真找到了：
``` js
_viewer.scene.primitives.remove(primitive) → Boolean
```
参考文档：[https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html?classFilter=PrimitiveCollection#remove](https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html?classFilter=PrimitiveCollection#remove)

既然销毁不行就做移除操作。实测有效，对象被移除了。

## 参考

- [[官方]Introduction to Particle Systems](https://cesium.com/docs/tutorials/particle-systems/)
- [[官方]Advanced Particle System Effects](https://cesium.com/docs/tutorials/particle-systems-more-effects/)
- [[官方示例]Particle System 小车尾气](https://sandcastle.cesium.com/?src=Particle%2520System.html)
- [[官方示例]Particle System Fireworks 烟花](https://sandcastle.cesium.com/?src=Particle%2520System%2520Fireworks.html)
- [[官方示例]天气](https://sandcastle.cesium.com/?src=Particle%20System%20Weather.html)
- [[官方示例]拖尾](https://sandcastle.cesium.com/?src=Particle%20System%20Tails.html)
- [Cesium官方教程9--粒子系统](https://www.jianshu.com/p/cb18e2c8ba72)
- [CESIUM实时目标跟踪最新特效教程系列2—粒子系统（实时发射波束跟踪目标）](http://www.freesion.com/article/641351236/)
- [CESIUM粒子特效笔记](http://www.freesion.com/article/2034167925/)
- [CESIUM中级教程9 - ADVANCED PARTICLE SYSTEM EFFECTS 高级粒子系统效应](http://www.freesion.com/article/497036995/)

