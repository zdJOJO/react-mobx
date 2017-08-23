/*
webpack(bundle-loader) + react-router 实现组件的动态加载
*/

import HelloWorld from "../pages/helloWorld";
  
const lazyLoadComponent = (pageName) => (location, callback) => {
  let pageBundle = require("bundle-loader?lazy!../pages/" + pageName);
  return pageBundle( page => callback(null, page));
};

const routeConfig = [
  {
    path: "/",
    getComponent: lazyLoadComponent("app"),
    indexRoute: {component: HelloWorld},
    childRoutes: [
      { 
        path: "page1", 
        getComponent: lazyLoadComponent("page1"),
        childRoutes: [
          {
            path: "user/:userId", 
            getComponent: lazyLoadComponent("user")
          }
        ]
      },
      { 
        path: "page2", 
        getComponent: lazyLoadComponent("page2")
      }
    ]
  }
];

export default routeConfig;