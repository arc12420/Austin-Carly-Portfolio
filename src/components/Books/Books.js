// **************************************BOOKS.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Books.css";

// -------------------------------------FUNCTIONALITY--------------------------------------
class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      // picture: ""
    };
  }


  // -----------------------------------STRUCTURE---------------------------------------------
  render() {
    return (
      <div className="Skills">
        Skills Page
      </div>
    );
  }
}

export default withRouter(Books);
