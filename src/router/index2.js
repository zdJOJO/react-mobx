/*
webpack(bundle-loader) + react-router 实现组件的动态加载
*/

import App from "../pages/app";
import HelloWorld from "../pages/hellow";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";

  
//const lazyLoadComponent = (pageName, callback) => {
//  let pageBundle = require("bundle-loader?lazy&name="+ pageName +"!../pages/" + pageName);
//  return pageBundle( page => callback(null, page));
//};

const lazyLoadComponent = lazyModule => {
  return (location, cb) => {
    lazyModule(module => cb(null, module));
  };
};

const routeConfig = [
  {
    path: "/",
    component: lazyLoadComponent(App),
    indexRoute: lazyLoadComponent(HelloWorld),
    childRoutes: [
      { 
        path: "page1", 
        getComponents: lazyLoadComponent(Page1)
      },
      { 
        path: "page2", 
        getComponents: lazyLoadComponent(Page2)
      }
    ]
  }
];

export default routeConfig;