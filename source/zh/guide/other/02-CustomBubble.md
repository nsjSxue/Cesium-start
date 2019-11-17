# 自定义气泡

``` js

var info = document.getElementById("info");
function showInfo(entity) {
    info.innerHTML = entity.name + '<br>' + entity.description;
    info.style.display = 'block';
}
function hideInfo() {
    info.style.display = 'none';
}
var scene = viewer.scene;
var pickPosition;
viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(movement) {
    var picked = scene.pick(movement.position);
    if (picked) {
        if (picked.id == model) {

            pickPosition = scene.pickPosition(movement.position);
            showInfo(model);
        }
    } else {
        hideInfo();
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
var removeChanged = scene.postRender.addEventListener(function (percentage) {

    //转换到屏幕坐标
    if (pickPosition && info.style.display == 'block') {
        var winpos = scene.cartesianToCanvasCoordinates(pickPosition);
        if (winpos) {

            info.style.left = (winpos.x - 100 / 2).toFixed(0) + 'px';
            info.style.top = (winpos.y - 100).toFixed(0) + 'px';
        }
    }
});
```

[在线预览](https://sogrey.github.io/Cesium-start-Example/examples/other/CustomBubble.html)