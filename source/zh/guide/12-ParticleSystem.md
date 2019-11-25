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



## Particle类

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

## ParticleBurst类

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

指定一个`burst`对象数组，以在指定的时间发射粒子爆发（如上面的动画所示）。这会增加粒子系统的多样性或爆炸性。

将此属性添加到您的中`particleSystem`。

``` js
bursts : [
    new Cesium.ParticleBurst({time : 5.0, minimum : 300, maximum : 500}),//指定在第5秒发射最小300个粒子，最大500个
    new Cesium.ParticleBurst({time : 10.0, minimum : 50, maximum : 100}),
    new Cesium.ParticleBurst({time : 15.0, minimum : 200, maximum : 300})
]
```

在给定的时间，这些脉冲将在最小和最大粒子之间发射。

## ParticleEmitter类

一个从ParticleSystem初始化Particle的对象。此类型描述一个接口，不能直接实例化。

当粒子诞生时，其初始位置和速度矢量受的控制`ParticleEmitter`。发射器每秒会产生由`emissionRate`参数指定的一定数量的粒子，并根据发射器类型使用随机速度进行初始化。

内置的几个发射器对象：

- [BoxEmitter](https://cesium.com/docs/cesiumjs-ref-doc/BoxEmitter.html) 在箱子内发射粒子的粒子发射器。粒子将随机放置在盒子中，并且具有从盒子中心发出的初始速度。
  在一个盒子内随机采样的位置初始化粒子，并将它们从六个盒子面之一中引出。它接受一个Cartesian3参数，该参数指定盒子的宽度，高度和深度尺寸。
- [CircleEmitter](https://cesium.com/docs/cesiumjs-ref-doc/CircleEmitter.html) 从圆形发射粒子的粒子发射器。粒子将定位在一个圆内，并且具有沿z向量移动的初始速度。
- [ConeEmitter](https://cesium.com/docs/cesiumjs-ref-doc/ConeEmitter.html) 在圆锥体内发射粒子的粒子发射器。粒子将位于圆锥体的尖端，并且初始速度朝向底部。
- [SphereEmitter](https://cesium.com/docs/cesiumjs-ref-doc/SphereEmitter.html) 在球体内发射粒子的粒子发射器。粒子将随机放置在球体内，并且具有从球体中心发出的初始速度。

## ParticleSystem类

粒子系统管理粒子集合的更新和显示。


## 参考

- [[官方]Introduction to Particle Systems](https://cesium.com/docs/tutorials/particle-systems/)
- [[官方]Advanced Particle System Effects](https://cesium.com/docs/tutorials/particle-systems-more-effects/)
- [[官方示例]Particle System 小车尾气](https://sandcastle.cesium.com/?src=Particle%2520System.html)
- [[官方示例]Particle System Fireworks 烟花](https://sandcastle.cesium.com/?src=Particle%2520System%2520Fireworks.html)
- [[官方示例]天气](https://sandcastle.cesium.com/?src=Particle%20System%20Weather.html)
- [[官方示例]拖尾](https://sandcastle.cesium.com/?src=Particle%20System%20Tails.html)
- [Cesium官方教程9--粒子系统](https://www.jianshu.com/p/cb18e2c8ba72)

