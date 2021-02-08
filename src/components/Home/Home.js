// **************************************Home.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React, { Component } from "react";
import axios from "axios";
import "./Home.css";

// -------------------------------------FUNCTIONALITY--------------------------------------
class Home extends Component {
  constructor() {
    super();
    this.state = {
      newbook: []
    };
  }
  
  
  
  // -------------------------------------HANDELERS-------------------------------------------
  
  // -----------------------------------STRUCTURE---------------------------------------------
  render() {
    return (
      <div className="home">
        Home Page      
      </div>
    );
  }
}

export default Home;
