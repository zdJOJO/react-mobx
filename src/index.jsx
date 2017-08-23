import React from "react";
import { render } from "react-dom";
import { Router, hashHistory} from "react-router";

import routeConfig from "./router/index";

render(
  <Router 
    history={hashHistory} 
    routes={routeConfig}
  />, 
  document.getElementById("app")    
);