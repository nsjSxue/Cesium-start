# dae转gltf/bgltf

使用COLLADA2GLTF-bin.exe把dae数据转为gltf格式。通过cmd进入到colladaTogltf.exe所在的文件夹，使用如下命令：

``` bash
COLLADA2GLTF-bin.exe –f daePath  -e
```
或者
``` bash
COLLADA2GLTF-bin.exe –f daePath -o gltfPath
```
这里的daePath为dae文件的全路径，比如`C:\Test.dae`

gltf的转换工具可以在[https://github.com/KhronosGroup/glTF/wiki/Converter-builds](https://github.com/KhronosGroup/glTF/wiki/Converter-builds)获取——COLLADA2GLTF-bin.exe


参考：

- [[github]COLLADA to glTF converter](https://github.com/KhronosGroup/COLLADA2GLTF)
- [dae转gltf](https://blog.csdn.net/black2Girl/article/details/87718559)
- [Cesium中导入三维模型方法（dae到glft/bgltf）](https://blog.csdn.net/l491453302/article/details/46766909)