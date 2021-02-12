// **************************************ABOUT.JS*****************************************

import React from "react";
import "./About.css";
import FamilyPic from "../../Photos/images/Family.jpg";

// -------------------------------------FUNCTIONALITY--------------------------------------
function About() {
  return (
    <main className="aboutComponent">
      <section className="mainBox">
        <header className="aboutHeader">
          <h1 className="aboutTitle">
            About <br /> Austin Carly
          </h1>
          <div className="aboutQuoteBox">
            <p className="aboutQuote">
              " You will never change your life until you change something you
              do daily. The secret of your success is found in your daily
              routine." - C. Maxwell
            </p>
          </div>
        </header>
        <div class="aboutImageBox">
          <img class="aboutImage" src={FamilyPic} alt="" />
        </div>
        <div className="aboutInfoBox">
          <div className="aboutInfo">
            <p>
              Austin Carly was born and raised in Utah County, Utah. Upon
              graduating high school, he was unsure of the career path he wanted
              to take. Rather than doing nothing, he decided to serve a two-year
              service mission for his church. On this religious mission, he was
              able to develop many skills such as communication and leadership.
              Upon returning, Austin was still faced with the decision to choose
              a career. This was difficult because he didn't feel that he had a
              passion for any specific career choice. What he did know at the
              time, was that he enjoyed working & collaborating with people.{" "}
            </p>
            <br />
            <hr/>
            <br />
            <p>
              Several years later, Austin had tested the waters with a few
              career options that included customer service, team lead
              positions, insurance and ticketing. None of those seemed to be the
              right fit, but throughout each of these jobs, Austin was able to
              realize that he really enjoyed coding within Microsoft Excel. At
              each of his positions, he was allowed the opportunity to create
              intricate Excel Spreadsheets for the company's/department's
              specific needs. These opportunities created a small desire to try
              actual coding.{" "}
            </p>
            <br />
            <hr/>
            <br />
            <p>
              In Spring 2020, life took an unexpected turn due to COVID-19 when
              he was let go due to the shutdown. Upon losing his job, Austin
              decided to use the unexpected for his gain. He took the leap and
              began his journey towards web development by registering and
              completing his coding schooling. Austin attended Dev Mountain's
              rigorous 13-week course in web development & coding.{" "}
            </p>
            <br />
            <hr/>
            <br />
            <p>
              Austin is proud to say that he has finally found his passion and
              is excited to get into the web development field. Just like quoted
              above, he finally feels like this change in his life has directed
              him toward success and he is eager to begin his career.{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
