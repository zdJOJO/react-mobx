# 项目技术栈
## react+mobx+dynamic react-router 



## 打包组件按需加载有2个方案：
  ### 方案一: 按照react-router 的 require.ensure 的方法
  本地运行  `npm start`

  ### 方案二： webpack(bundle-loader) + react-router 实现组件的动态加载
  本地运行  `npm run start-bunlde-loader`
  
  ### 注意点:
  1.在使用方案一时，如果模块的导出使用了ES6的 default export, 需要 require("../pages/Page1/index").`default`

  2.在使用方案二时，模块的导出需要使用 module.exports 不能使用ES6的 default export

