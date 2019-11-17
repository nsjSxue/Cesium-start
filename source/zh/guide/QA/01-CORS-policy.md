# 跨域问题

![](../../../.vuepress/public/img/cors-policy.png)

- 症状：  浏览器输出CORS policy错误，所加载的对象没显示
- 问题定位：web前端开发，与cesium无关
- 问题复现：页面引用的一些不在当前页面地址的资源
- 问题解决：
    - 跨域问题的终极解决方法在服务端 
    - 若服务端代码可改：添加跨域头
    - 若服务端不可控：添加代理服务器

![](../../../.vuepress/public/img/cors-policy2.png)