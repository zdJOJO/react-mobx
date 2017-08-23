import React, { Component } from "react";
import { Link } from "react-router";

const urls = [
  {id: "1000", name: "李雷"},
  {id: "1001", name: "韩梅梅"},
  {id: "1002", name: "大明"},
  {id: "1003", name: "小刚"}
];

class Page1 extends Component{
  render(){
    return(                 
      <div className="testColor">
        这个是111111111111111
        <ul>
          {
            urls.map( item => (
              <li key={item.id}><Link to={`/page1/user/${item.id}`}>{item.name}</Link></li>
            ))
          }
        </ul>
        <div>{this.props.children}</div>
      </div>  		
    );
  }
}

//export default Page1;
module.exports = Page1;