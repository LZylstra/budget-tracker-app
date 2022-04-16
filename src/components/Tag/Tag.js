import React, { Component } from "react";

import "./Tag.css";

class Tag extends Component {

 onClickTag=(e)=>{
  // e.preventDefault();
   // console.log(this.props.value);
    this.props.handleButtonChoice(this.props.value)
  }
  render(){
  return ( 
    <div className="tag" onClick={this.onClickTag}>
      <div className="innertag">

        <h2>{this.props.title}</h2>

      </div>
    </div>
  );
  }
}

export default Tag;
