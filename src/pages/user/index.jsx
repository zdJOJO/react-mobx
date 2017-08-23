import React, { Component } from "react";

class User extends Component{
  render(){
    return(                 
      <div>
        <h4>我的id 是: ${this.props.params.userId}</h4>
      </div>
    );
  }
}

module.exports = User;