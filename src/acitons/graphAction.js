import { action } from "mobx";
import { load } from '../pages/page2/graph';

export default class GraphAction {
  constructor(state){
    this.state = state;
  }

  @action chooseLogicDiagram=(data)=>{
    this.state.selectGraphId = data.id;
    load(data.model);
  }

};
