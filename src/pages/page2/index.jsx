import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import go from 'gojs';

import './drag.less';
import {init} from './graph';

@inject("graph", "actions") @observer
class Page2 extends Component{

  componentDidMount() {
    const { graph } = this.props;
    init(graph.logicDiagrams[0].model);
  }
  
  render(){
    const { graph, actions } = this.props;
    return(                 
      <div className="testColor">

        <div>
          <p>
            节点信息：{JSON.stringify(graph.selectNode)}
          </p>
          <p>
            边信息：{JSON.stringify(graph.selectEdge)}
          </p>
        </div>

        <div className="buttons">
          <p>
            <input
              placeholder="请填写新投资图谱的名字" 
              value={graph.newGraphName} 
              onChange={actions.graphAction.handleChnageGraphName} 
            />
            <button onClick={actions.graphAction.addNewGraph}>新增逻辑图</button>  
          </p>
          <button onClick={actions.graphAction.saveData}>保存当前图谱</button>
          <button onClick={actions.graphAction.exportGraphes}>导出所有逻辑图</button>
        </div>

        流程图：
        <div className="box">
          <div className="logicDiagrams">
            <ul>
              {graph.logicDiagrams.map( logicDiagram =>
                <li key={logicDiagram.id} className={logicDiagram.id === graph.selectGraphId ? "active" : null }>
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