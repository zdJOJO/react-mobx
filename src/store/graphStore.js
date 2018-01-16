import { observable } from "mobx";

export default class Graph {

  baseModel = {
    nodeDataArray: [],
    linkDataArray: []
  };

  @observable logicDiagrams = window.localStorage.getItem("InvestmentGraph") 
    ? JSON.parse(window.localStorage.getItem("InvestmentGraph"))
    : [
      {
        id: "",
        name: "",
        model: []
      }
    ]


  @observable selectGraphId = this.logicDiagrams[0].id;

  @observable selectNode;

  @observable selectEdge;

  @observable newGraphName = "";


}