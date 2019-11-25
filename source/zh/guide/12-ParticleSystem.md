# ParticleSystem 粒子系统

## 什么是粒子系统？

粒子系统是一种图形技术，可以模拟复杂的基于物理的效果。粒子系统是小图像的集合，当一起查看时，它们会形成更复杂的“模糊”对象，例如火，烟，天气或烟火。通过使用诸如初始位置，速度和寿命之类的属性指定单个粒子的行为，可以控制这些复杂的效果。

cesium 中粒子效果相关：

- [Particle](https://cesium.com/docs/cesiumjs-ref-doc/Particle.html?classFilter=Particle) 粒子系统发射的粒子。
- [ParticleBurst](https://cesium.com/docs/cesiumjs-ref-doc/ParticleBurst.html?classFilter=Particle) 表示在系统生命周期中给定时间的粒子系统中的粒子爆发。
- [ParticleEmitter](https://cesium.com/docs/cesiumjs-ref-doc/ParticleEmitter.html?classFilter=Particle) 一个从ParticleSystem初始化Particle的对象。此类型描述一个接口，不能直接实例化。
- [ParticleSystem](https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html?classFilter=Particle) 粒子系统管理粒子集合的更新和显示。

## Particle类

粒子系统发射的粒子。

## ParticleEmitter类

一个从ParticleSystem初始化Particle的对象。此类型描述一个接口，不能直接实例化。

## ParticleSystem类

粒子系统管理粒子集合的更新和显示。


## 参考

- [[官方]Introduction to Particle Systems](https://cesium.com/docs/tutorials/particle-systems/)
- [[官方]Advanced Particle System Effects](https://cesium.com/docs/tutorials/particle-systems-more-effects/)
- [[官方示例]Particle System](https://sandcastle.cesium.com/?src=Particle%2520System.html)
- [[官方示例]Particle System Fireworks](https://sandcastle.cesium.com/?src=Particle%2520System%2520Fireworks.html)
- [Cesium官方教程9--粒子系统](https://www.jianshu.com/p/cb18e2c8ba72)