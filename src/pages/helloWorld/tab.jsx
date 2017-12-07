import React, { Component } from "react";
import {observer} from "mobx-react";
import { Transition } from "react-transition-group";

const duration = 300;
const defaultStyle = {
  transition: `background-color ${duration}ms linear`,
  backgroundColor: "#fff",
  padding: "5px 10px"
};
const transitionStyles = {
  entering: { backgroundColor: "#eaeaea" },
  entered:  { backgroundColor: "#c1c1c1" },
  exiting: { backgroundColor: "#c1c1c1" },
  exited: { backgroundColor: "white" }
};

export const Tab = observer(
  (props)=> (
    <div className="tabs">
      {
        props.tabs.map((tab, index)=>
          <Transition
            timeout={{
              enter: 200,
              exit: 100
            }}
            key={index}
            in={props.activeKey === index}
          >
            {(state)=>(
              <div
                style={{
                  ...defaultStyle,
                  flex: 1/props.tabs.length,
                  ...transitionStyles[state]
                }} 
                onClick={()=>{props.handleSelectTab(index)}}
              >
                {tab}
              </div>
            )}
          </Transition>
        )
      }
    </div>
  )
);