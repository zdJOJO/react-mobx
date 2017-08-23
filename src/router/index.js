/*
  webpack(require.ensure) + react-router 实现组件的动态加载
*/

import App from "../pages/App";
import HelloWorld from "../pages/HelloWorld";
  
// 问题: 如何 使用 Redirect
const routeConfig = [
  {
    path: "/",
    component: App,
    indexRoute: {component: HelloWorld},
    childRoutes: [
      { 
        path: "page1", 
        getComponents: (location, callback) => require.ensure([], require => {
          callback(null, require("../pages/Page1/index").default);
        }, "page1")
      },
      { 
        path: "page2", 
        getComponents: (location, callback) => require.ensure([], require => {
          callback(null, require("../pages/Page2/index").default);
        }, "page2")
      },

      //Redirect
      {
        path: "*",
        onEnter: (_, replaceState) => replaceState(null, "/")
      }
    ]
  }
];

export default routeConfig;