import React from "react";
import { render } from "react-dom";
import { Router, browserHistory} from "react-router";

import routeConfig from "./router/index";

render(
  <Router 
    history={browserHistory} 
    routes={routeConfig}
  />, 
  document.getElementById("app")    
);