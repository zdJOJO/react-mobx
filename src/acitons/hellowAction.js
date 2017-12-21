import { action } from "mobx";

export default class HelloAction {
  constructor(state){
    this.state = state;
  }

  @action handleRemove= index =>{
    let tem = this.state.hello.students.slice();
    tem.splice(index, 1);
    this.state.hello.students = tem;
  }

  @action handleAdd =() =>{
    let value = this.state.hello.name.trim();
    this.state.hello.students.push({
      name: value || "无名",
      age: parseInt(Math.random()*30),
      id: Math.random()
    });
  }

  @action handleChange=(event)=>{
    this.state.hello.name = event.target.value;
  }

  @action handleSelectTab=(index)=>{
    this.state.hello.activeKey = index;
  }
};