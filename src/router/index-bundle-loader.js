/*
webpack(bundle-loader) + react-router 实现组件的动态加载
*/

import HelloWorld from "../pages/helloWorld";
  
// const lazyLoadComponent = (pageName) => (location, callback) => {
//   let pageBundle = require("bundle-loader?lazy!../pages/" + pageName);
//   return pageBundle( page => callback(null, page));
// };

// https://doc.webpack-china.org/api/module-methods#import

const routeConfig = [
  {
    path: "/",
    getComponent: ()=>import(/* webpackChunkName: "app1" */ "../pages/app"),   //lazyLoadComponent("app"),
    indexRoute: {component: HelloWorld},
    childRoutes: [
      { 
        path: "page1", 
        getComponent:()=>import("../pages/page1"), //lazyLoadComponent("page1"),
        childRoutes: [
          {
            path: "user/:userId", 
            getComponent:()=>import("../pages/user") //lazyLoadComponent("user")
          }
        ]
      },
      { 
        path: "page2", 
        getComponent: ()=>import("../pages/page2") //lazyLoadComponent("page2")
      }
    ]
  }
];

export default routeConfig;