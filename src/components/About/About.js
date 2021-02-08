// **************************************ABOUT.JS*****************************************

import React, { Component } from "react";
import axios from "axios";
import "./About.css";

// -------------------------------------FUNCTIONALITY--------------------------------------
class About extends Component {
  constructor() {
    super();
    this.state = {
      about: [],
    };
  }

  // -----------------------------------STRUCTURE---------------------------------------------
  render() {
    return (
      <div className="About Component">
        <div>About Page</div>
      </div>
    );
  }
}
export default About;
