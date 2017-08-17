import {observable, action} from "mobx";

class HelloWorlStore {
  @observable timer = "mobxmobxmobxmobxmobx"
}

const myHelloStore = new HelloWorlStore();
export default myHelloStore;