import {observable} from "mobx";

export default class HelloStore {

  //tab 切换 
  tabs = ["one", "two", "three"];

  @observable timer = "mobxmobxmobxmobxmobx";

  @observable students = [
    {name: "小刚", sex: "男", age: 12, id: Math.random()},
    {name: "小红", sex: "女", age: 8, id: Math.random()},
    {name: "小芳", sex: "女", age: 14, id: Math.random()},
    {name: "建国", sex: "男", age: 20, id: Math.random()}
  ];

  @observable name = "";
  
  @observable activeKey = 0;

};
