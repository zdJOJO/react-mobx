import React, { Component } from "react";
import {observer} from "mobx-react";
import "../../style.less";
import myHelloStore from "./hellowStore";

@observer
export default class HelloWorld extends Component{
  render(){
    return(                 
      <div className="testColor">
        hellow world !!!!
        <div className="inside">
          {myHelloStore.timer}
        </div>
      </div>  		
    );
  }
}