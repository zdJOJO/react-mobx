import React, { Component } from "react";
import { Transition, CSSTransition, TransitionGroup} from "react-transition-group";
import { observer, inject } from "mobx-react";
import "../../style.less";
import "./index.less";
import {Tab} from "./tab";


const duration = 1000;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  padding: 20,
  display: "inline-block",
  backgroundColor: "#8787d8"
};

const transitionStyles = {
  entering: { backgroundColor: "red" },
  entered:  { backgroundColor: "orange" },
  exiting: { backgroundColor: "black" },
  exited: { backgroundColor: "#8787d8" }
};

const FadeOne = (props) => (
  <Transition 
    in={props.in} 
    timeout={duration}
  >
    {(state)=>(
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        一个例子
      </div>
    )}
  </Transition>
);

const StudentTrans = ({ children, ...props}) => (
  <CSSTransition 
    {...props}
    timeout={800}
    classNames="studentFade"
  >
    {children}
  </CSSTransition>
);


@inject("hello", "actions") @observer
class HelloWorld extends Component{

  state = {
    show: false
  }

  render(){
    const { hello, actions } = this.props;
    return(
      <div className="testColor">
        WelCome!!   hellow world !!!!
        <div className="inside">
          {hello.timer}
        </div>

        <Tab {...hello} {...actions} />

        { hello.activeKey === 0 &&
          <div className="container">
            <button onClick={()=>{this.setState({show:!this.state.show})}}>Click</button>
            <FadeOne in={this.state.show}
            />
          </div>
        }

        { hello.activeKey === 1 &&
          <div className="container">
            <div className="studentList">
              <TransitionGroup 
                component="ul"
              >
                {
                  hello.students.map((student, index) => (
                    <StudentTrans key={student.id}>
                      <li className="studentItem">
                        <span>name: {student.name}, age: {student.age}</span>
                        <button onClick={()=>{actions.helloAction.handleRemove(index)}}>X</button>
                      </li>
                    </StudentTrans>
                  ))
                }
              </TransitionGroup>
            </div> 
            <input type="text" onChange={actions.helloAction.handleChange}/>
            <button onClick={actions.helloAction.handleAdd}>增加</button>
          </div>
        }
      </div>  		
    );
  }
}

//export default HelloWorld;
module.exports = HelloWorld;