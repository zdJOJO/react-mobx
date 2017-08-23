/*
webpack(bundle-loader) + react-router 实现组件的动态加载
*/

import React from "react";
import { render } from "react-dom";
import { Router, browserHistory} from "react-router";

import routeConfig from "./router/index-bundle-loader";

render(
  <Router 
    history={browserHistory} 
    routes={routeConfig}
  />, 
  document.getElementById("app")    
);