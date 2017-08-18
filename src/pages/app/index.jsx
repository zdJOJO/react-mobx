import React, { Component } from "react";
import { Link } from "react-router";

class App extends Component{
  render(){
    return(                 
      <div className="testColor">
        <h5>这个是APP</h5>
        <ul>
          <li><Link to="/">hello</Link></li>
          <li><Link to="/page1">page1</Link></li>
          <li><Link to="/page2">page2</Link></li>
        </ul>

        <section>
          {this.props.children}
        </section>
      </div>  		
    );
  }
}

//export default App;
module.exports = App;