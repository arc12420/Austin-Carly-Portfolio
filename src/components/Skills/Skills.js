// **************************************BOOKS.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React from "react";
import "./Skills.css";
import JavaScriptIcon from "../../Photos/images/js-square-brands.svg";
import CSSIcon from "../../Photos/images/css3-brands.svg";
import HTMLIcon from "../../Photos/images/5847f5bdcef1014c0b5e489c.png";
import ReactIcon from "../../Photos/images/react-brands.svg";
import NodeIcon from "../../Photos/images/node-brands.svg";
import ReduxIcon from "../../Photos/images/5848309bcef1014c0b5e4a9a.png";
import PostgreSQLIcon from "../../Photos/images/kisspng-postgresql-database-logo-application-software-comp-iterative-consulting-web-development-prototyping-5b7c0d6d43a3e8.4852748515348565572771.png";
import SASSIcon from "../../Photos/images/sass-brands.svg";
import NodemailerIcon from "../../Photos/images/Nodemailer.png";
import ExpressIcon from "../../Photos/images/Express.png";

// -------------------------------------FUNCTIONALITY--------------------------------------
function Skills() {
  return (
    <main className="skillsComponent">
      <div className="MainBox">
        {/* --------------------------------------------------SKILL ICONS----------------------------------------------- */}
        <div className="skillIconsMainBox">
          <div className="skillIconsBox">
            <div className="skillIconName">
              <div className="skillIconBox">
              <img
                className="skillIcon"
                src={JavaScriptIcon}
                alt="JavaScriptIcon"
              />
              </div>
              <h5>Javascript</h5>
            </div>
            <div className="skillIconName">
              <div className="skillIconBox">
              <img className="skillIcon" src={CSSIcon} alt="CSSIcon" />
              </div>
              <h5>CSS</h5>
            </div>
            <div className="skillIconName">
              <div className="skillIconBox">
              <img className="skillIcon" src={HTMLIcon} alt="HTMLIcon" />
              </div>
              <h5>HTML</h5>
            </div>
            <div className="skillIconName">
              <div className="skillIconBox">
              <img className="skillIcon" src={ReactIcon} alt="ReactIcon" />
              </div>
              <h5>React</h5>
            </div>
            <div className="skillIconName">
              <div className="skillIconBox">
              <img className="skillIcon" src={NodeIcon} alt="NodeIcon" />
              </div>
              <h5>Node</h5>
            </div>
            <div className="skillIconName">
              <div className="skillIconBox">
              <img className="skillIcon" src={ReduxIcon} alt="ReduxIcon" />
              </div>
              <h5>Redux</h5>
            </div>
            <div className="skillIconName">
              <div className="skillIconBox">
              <img
                className="skillIconPostgreSQL"
                src={PostgreSQLIcon}
                alt="PostgreSQLIcon"
              />
              </div>
              <h5>PostgreSQL</h5>
            </div>
            <div className="skillIconName">
              <div className="skillIconBox">
              <img className="skillIcon" src={SASSIcon} alt="SASSIcon" />
              </div>
              <h5>SASS</h5>
            </div>
            <div className="skillIconName">
              <div className="skillIconBox">
              <img
                className="skillIconNodeMailer"
                src={NodemailerIcon}
                alt="NodemailerIcon"
              />
              </div>
              <h5>Nodemailer</h5>
            </div>
            <div className="skillIconName">
              <div className="skillIconBox">
              <img
                className="skillIconExpress"
                src={ExpressIcon}
                alt="ExpressIcon"
              />
              </div>
              <h5>Express</h5>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------- */}
      </div>
    </main>
  );
}

export default Skills;
