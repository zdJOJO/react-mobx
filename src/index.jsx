import React from "react";
import { render } from "react-dom";
import { Router, browserHistory} from "react-router";
import { Provider } from 'mobx-react';

/* 引入路由 */
// import routeConfig from "./router/index";
import routeConfig from "./router/index-bundle-loader";

/* 引入 store */
import mobxStates from './store';

/* 引入 actions */
import actions from './acitons';

render(
  <Provider
    {...mobxStates}
    actions={actions}
  >
    <Router 
      history={browserHistory} 
      routes={routeConfig}
    />
  </Provider>
  , 
  document.getElementById("app")
);
// render(
//   <Router 
//     history={browserHistory} 
//     routes={routeConfig}
//   />, 
//   document.getElementById("app")
// );