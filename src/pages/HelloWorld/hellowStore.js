import {observable, action} from "mobx";

class HelloWorldStore {
  @observable timer = "mobxmobxmobxmobxmobx";

  @observable students = [
    {name: "小刚", sex: "男", age: 12, id: Math.random()},
    {name: "小红", sex: "女", age: 8, id: Math.random()},
    {name: "小芳", sex: "女", age: 14, id: Math.random()},
    {name: "建国", sex: "男", age: 20, id: Math.random()}
  ]

  @observable name = "";

  @observable activeKey = 0;

  @action handleRemove= index =>{
    let tem = this.students.slice();
    tem.splice(index, 1);
    this.students = tem;
  }

  @action handleAdd =() =>{
    let value = this.name.trim();
    this.students.push({
      name: value || "无名",
      age: parseInt(Math.random()*30),
      id: Math.random()
    });
  }

  @action handleChange=(event)=>{
    this.name = event.target.value;
  }

  @action handleSelectTab=(index)=>{
    this.activeKey = index;
  }

}

const myHelloStore = new HelloWorldStore();
export default myHelloStore;