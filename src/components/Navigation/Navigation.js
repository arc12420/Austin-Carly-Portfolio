// **************************************Navigation.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import NavHam from "./NavigationHamburger";
import "./Navigation.css";

// -------------------------------------FUNCTIONALITY--------------------------------------
class Nav extends Component {
  constructor() {
    super();
    this.state = {
      checkedN: true,
    };
  }

  // scrollFunc = () => {
    
    // let Height = window.scrollY

    // if(Height > 0) scrollY(10)
  // }

  // -------------------------------------FUNCTIONS-------------------------------------------
  // -------------------------------------HANDELERS-------------------------------------------
  handleCheck = (event) => {
    this.setState({ checkedN: event.target.checked });
  };

  handleCheckClick = (event) => {
    this.setState({ checkedN: true });
  };

  // -----------------------------------STRUCTURE---------------------------------------------
  render(props) {
    return (
      <nav className="navigationComponent">
        <div className="austinLogoBox">
          <div className="austinLogo">Austin Carly</div>
          <div className="austinLogoTitle">Web Developer</div>
        </div>
        {/* v------------------------------------------HAMBURGER/LOGOUT BUTTONS-------------------------------v */}
        <div className="hiddenButtons">
          <div className="menuWrap">
            <input
              type="checkbox"
              className="toggler"
              checked={this.state.checkedN}
              onChange={this.handleCheck}
            />
            {this.state.checkedN === true ? null : (
              <div className="navHamTopContainer">
                <NavHam
                  className="navHamCont"
                  handleCheckClick={this.handleCheckClick}
                />
                <div
                  className="greySpace"
                  onClick={() => {
                    this.handleCheckClick();
                  }}
                ></div>
              </div>
            )}
            <li className="iconHamburgerBox">
              <a href="" className="iconHamburger">
                <GiHamburgerMenu />
              </a>
            </li>
          </div>
        </div>
        {/* v-----------------------------------------NAVIGATION BUTTONS-------------------------------v */}
        <div className="navButtons">
          <div
            className={
              this.props.location.pathname === "/" ? "selected" : "navHome"
            }
            onClick={() => this.props.history.push("/") }
          >
            Home
          </div>
          <div
            className={
              this.props.location.pathname === "/Skills"
                ? "selected"
                : "navBooks"
            }
            onClick={() => this.props.history.push("/Skills")}
          >
            Skills
          </div>
          <div
            className={
              this.props.location.pathname === "/Projects"
                ? "selected"
                : "navProjects"
            }
            onClick={() => this.props.history.push("/Projects")}
            >
              Projects
            </div>
          <div
            className={
              this.props.location.pathname === "/About"
                ? "selected"
                : "navAbout"
            }
            onClick={() => this.props.history.push("/About")}
          >
            About
          </div>          
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(
  withRouter(Nav)
);
