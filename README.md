# React仿简书项目

> 使用react-create-app构建项目，仿简书页面样式进行开发的仿写项目



------



### 引入关键组件

在react-create-app构建完成之后，会自带几个包，用来支持react语法的书写。

```
"react": "^16.6.3",
"react-dom": "^16.6.3",
"react-scripts": "2.1.1",
```

下来，我们就需要自己引入一些开发时需要的包了。

[Redux](https://github.com/reduxjs/redux): Redux 是 JavaScript 状态容器，提供可预测化的状态管理。([GitBook中文文档](https://www.redux.org.cn/))

[react-redux](https://github.com/reduxjs/react-redux):  [Redux](https://github.com/reactjs/redux) 官方提供的 React 绑定库。 具有高效且灵活的特性。([GitBook中文文档](http://cn.redux.js.org/docs/react-redux/))

[react-transition-group](https://github.com/reactjs/react-transition-group): React官方实现动画效果的插件。([一篇文章](https://segmentfault.com/a/1190000015487495))

[styled-components](https://github.com/styled-components/styled-components): 利用标记的模板文字（最近添加到JavaScript）和CSS的强大功能，样式组件允许您编写实际的CSS代码来设置组件的样式。([官网文档](https://www.styled-components.com/docs))

[immutable](https://facebook.github.io/immutable-js/): 创建后不可更改[不可变](http://en.wikipedia.org/wiki/Immutable_object)数据，从而使应用程序开发更简单，无需防御性复制，并且可以通过简单的逻辑实现高级存储和更改检测技术。

[redux-immutable](https://www.npmjs.com/package/redux-immutable): 令redux的state保持一致，都为不可更改的数据。

另外还有一些没有用上的先不列举。	
