import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import go from 'gojs';

import './drag.less';
import {init} from './graph';

@inject("graph", "actions") @observer
class Page2 extends Component{

  componentDidMount() {
    const { graph } = this.props;
    init(graph.logicDiagrams[1].model);
  }
  
  render(){
    const { graph, actions } = this.props;
    return(                 
      <div className="testColor">
        流程图：
        <div className="box">
          <div className="logicDiagrams">
            <ul>
              {graph.logicDiagrams.map( logicDiagram =>
                <li key={logicDiagram.id}>
                  <a href="javascript:void(0)" 
                    onClick={(event)=>{
                      event.preventDefault();
                      actions.graphAction.chooseLogicDiagram(logicDiagram);
                    }}
                  >
                    {logicDiagram.name}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div id="myPaletteDiv" />
          <div id="myDiagramDiv" />
        </div>
      </div>  		
    );
  }
}

//export default Page2;
module.exports = Page2;