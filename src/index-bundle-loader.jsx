/*
webpack(bundle-loader) + react-router 实现组件的动态加载


import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import HelloWorld from "./pages/HelloWorld";

const lazyLoadComponent = (pageName) => (location, callback) => {
  let pageBundle = require("bundle-loader?lazy!./pages/" + pageName + "/index");
  return pageBundle( page => callback(null, page));
};

render(
  <Router history={hashHistory} >
    <Route path="/" getComponent={lazyLoadComponent("App")}>
      <IndexRoute component={HelloWorld} />
      <Route getComponent={lazyLoadComponent("Page1")} />
      <Route getComponent={lazyLoadComponent("Page2")} />
    </Route>
  </Router>, 
  document.getElementById("app")    
);
*/


import React from "react";
import { render } from "react-dom";
import { Router, hashHistory} from "react-router";

import routeConfig from "./router/index-bundle-loader";

render(
  <Router 
    history={hashHistory} 
    routes={routeConfig}
  />, 
  document.getElementById("app")    
);