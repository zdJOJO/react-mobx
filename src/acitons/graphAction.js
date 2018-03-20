import { action } from "mobx";
import { load, save } from '../pages/page2/graph';

export default class GraphAction {
  constructor(state){
    this.state = state;
  }


  // 添加新图谱名字
  @action handleChnageGraphName=(event)=>{
    this.state.newGraphName = event.target.value;
  }

  // 新增 图谱
  @action addNewGraph=()=>{
    if(!this.state.newGraphName.trim()) return;
    let id = new Date().getTime();
    load(this.state.baseModel);
    this.state.logicDiagrams.push({
      ...this.state.baseModel,
      id: id,
      name: this.state.newGraphName.trim()
    });
    this.state.selectGraphId = id;
    this.state.newGraphName = "";
  }

  @action chooseLogicDiagram=(data)=>{
    this.state.selectGraphId = data.id;
    load(data.model);
  }

  /* 保存 */
  @action saveData=()=>{
    save().then( res => {
      this.state.logicDiagrams.forEach( (graph, index) => {
        if(graph.id === this.state.selectGraphId){
          this.state.logicDiagrams[index].model = {
            nodeDataArray: JSON.parse(res).nodeDataArray,
            linkDataArray: JSON.parse(res).linkDataArray
          };
          window.localStorage.setItem("InvestmentGraph", JSON.stringify(this.state.logicDiagrams));
          alert("保存成功");
        }
      });
    });

    console.log(this.state.logicDiagrams);
  }

  @action setSelectNode = node => {
    this.state.selectNode = node ;
  }

  @action setSelectEdge = edge => {
    this.state.selectEdge = edge ;
  }

  /* 删除某一张逻辑图 */
  @action removeGraph = index => {
    this.state.logicDiagrams.splice(index, 1);
    this.saveData();
  }

  /* 编辑图 名称 */
  @action editGraphName = index => {
    let name = window.prompt("请输入名字：") || this.state.logicDiagrams[index].name;
    this.state.logicDiagrams[index].name = name;
  }

  /* 导出 所有逻辑图 */
  exportGraphes=()=>{
    var text = JSON.stringify(this.state.logicDiagrams);
    var MIME_TYPE = 'text/plain';

    var downloadFile = function() {
      window.URL = window.webkitURL || window.URL;

      var bb = new Blob([text], {type: MIME_TYPE});

      var a = document.createElement('a');
      a.download = `${new Date().getTime()}-投资逻辑图.txt`;
      a.href = window.URL.createObjectURL(bb);
      a.textContent = 'Download ready';
      a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(':');
      a.click();
    };

    downloadFile();
  }

};
