/*
  webpack(require.ensure) + react-router 实现组件的动态加载
*/

import App from "../pages/app";
import HelloWorld from "../pages/helloWorld";
import User from "../pages/page1/user";
  
// 问题: 如何 使用 Redirect
const routeConfig = [
  {
    path: "/",
    component: App,
    indexRoute: {
      component: HelloWorld
      // getComponent: (location, callback) => require.ensure([], require => {
      //   callback(null, require("../pages/helloWorld/index"));
      // }, "helloWorld")
    },
    childRoutes: [
      { 
        path: "page1", 
        getComponent: (location, callback) => require.ensure([], require => {
          callback(null, require("../pages/page1/index"));
        }, "page1"),
        childRoutes: [
          {
            path: "user/:userId",
            component: User
            // getComponent: (location, callback) => require.ensure([], require => {
            //   callback(null, require("../pages/page1/user"));
            // }, "user")
          }
        ]
      },
      { 
        path: "page2", 
        getComponent: (location, callback) => require.ensure([], require => {
          callback(null, require("../pages/page2/index"));
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