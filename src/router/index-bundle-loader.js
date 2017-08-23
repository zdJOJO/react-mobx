/*
webpack(bundle-loader) + react-router 实现组件的动态加载
*/

import HelloWorld from "../pages/HelloWorld";
  
const lazyLoadComponent = (pageName) => (location, callback) => {
  let pageBundle = require("bundle-loader?lazy!../pages/" + pageName);
  return pageBundle( page => callback(null, page));
};

const routeConfig = [
  {
    path: "/",
    getComponent: lazyLoadComponent("App"),
    indexRoute: {component: HelloWorld},
    childRoutes: [
      { 
        path: "page1", 
        getComponent: lazyLoadComponent("Page1")
      },
      { 
        path: "page2", 
        getComponent: lazyLoadComponent("Page2")
      }
    ]
  }
];

export default routeConfig;