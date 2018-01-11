import { action } from "mobx";

export default class HelloAction {
  constructor(state){
    this.state = state;
  }

  @action handleRemove= index =>{
    let tem = this.state.students.slice();
    tem.splice(index, 1);
    this.state.students = tem;
  }

  @action handleAdd =() =>{
    let value = this.state.name.trim();
    this.state.students.push({
      name: value || "无名",
      age: parseInt(Math.random()*30),
      id: Math.random()
    });
  }

  @action handleChange=(event)=>{
    this.state.name = event.target.value;
  }

  @action handleSelectTab=(index)=>{
    this.state.activeKey = index;
  }
};