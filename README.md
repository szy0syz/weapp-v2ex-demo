# weapp-v2ex-demo
v2ex小程序demo

## 说明

第一个demo，目前版本为1.0，因为界面太丑我就不截图，等在1.xx版本中优化完毕后到2.0版本再放gif~

## 版本

- 1.0：完成最热主题列表展示、最新页面展示、主题详情展示、节点列表展示
- 2.0：使用wepy重构demo，将主题列表，主题详情做成组件
- 3.0：继续使用wepy重构demo，尽量将项目工程化

## 日志

- 2017-07-17: 决定直接上wepy的小程序框架，优化代码结构，最大模块化
- 2017-07-19: 本来计划这两天好好把wepy学完，结果开了party的培训睡眠会，悲剧。我现在真的在想，这个wepy有点复杂，一个小程序又没必要那么复杂啊~
- 2017-07-22: 边看书边写demo时发现，有个wepy-one的demo很不错，果断按照原理升级自己的demo。总体感觉自己工程化这块做得不行。
- 2017-07-22: 重构完毕

## 结构

.                           src目录结构
├── api                     
│   └── api.js             存放promisify后的api请求
├── app.wpy                小程序配置项（pages、tabBar、window、middlewares）
├── components             存放组件的文件夹
│   ├── nodeList.wpy       展示节点列表的组件
│   ├── topicDetail.wpy    展示主题详情的组件
│   └── topicList.wpy      展示主题列表的组件
├── index.template.html    
├── libs
│   └── utils.js           工具类
└── pages
    ├── detail.wpy         主题详情页
    ├── hot.wpy            最热主题列表页
    ├── latest.wpy         最新主题列表页
    └── node.wpy           节点列表页

4 directories, 11 files