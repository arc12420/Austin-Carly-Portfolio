import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import "./NavigationHamburger.css";

class NavHam extends Component {
  constructor() {
    super();
    this.state = {
      textColor: "red",
    };
  }

  
  // --------------------------RENDERED INFO-------------------------
  render(props) {
      console.log(props)
    return (
      <nav className="navigationHamComponent">
        <div className="navHamButtons">
          <div
            className={
              this.props.location.pathname === "/" ? "selected" : "navHome"
            }
            onClick={() => {
              this.props.history.push("/") 
              this.props.handleCheckClick();
            }}
          >
            Home
          </div>
          <div
            className={
              this.props.location.pathname === "/Books"
                ? "selected"
                : "navBooks"
            }
            onClick={() =>{ 
              this.props.history.push("/Books"); 
              this.props.handleCheckClick();
            }}
          >
            BOOKS
          </div>
          <div
            className={
              this.props.location.pathname === "/Projects"
                ? "selected"
                : "navAbout"
            }
            onClick={() => {
              this.props.history.push("/Projects"); 
              this.props.handleCheckClick();
            }}
          >
            Projects
          </div>
          <div
            className={
              this.props.location.pathname === "/About"
                ? "selected"
                : "navAbout"
            }
            onClick={() => {
              this.props.history.push("/About"); 
              this.props.handleCheckClick();
            }}
          >
            About
          </div>

        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(
  withRouter(NavHam)
);
