# 模型漂移

- 症状：  随着视角旋转，模型并不能在中心位置
- 问题定位：图形学，与cesium有关
- 问题复现：模型和地形的相对高度不一致
- 问题解决：
    - 1. `viewer.scene.globe.depthTestAgainstTerrain=true;//打开地形深度检测`
    - 2. 调节对象高度；
    - 3. `viewer.scene.globe.depthTestAgainstTerrain=false;//关闭地形深度检测`

