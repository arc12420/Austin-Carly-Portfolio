// **************************************Footer.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React from "react";
import "./Footer.css";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiCodewars } from "react-icons/si";

// -------------------------------------FUNCTIONALITY--------------------------------------
// -----------------------------------STRUCTURE---------------------------------------------
function Home(props) {
  return (
    <footer>
      <ul className="iconsBox">
        <li>
          <a href="https://github.com/arc12420" className="iconGithub">
            <SiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/austin-carly-21a58b1b4/"
            className="iconLinkedIn"
          >
            <SiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.codewars.com/users/ACARLY"
            className="iconPinterest"
          >
            <SiCodewars />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Home;
