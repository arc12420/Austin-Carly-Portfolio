import React, { useState } from "react";
import "../Calculator/Calculator.css";
import { FiDelete } from "react-icons/fi";
import { FaDivide } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
// import math from "mathjs";
// import { useEffect } from "react";

const initialDisplay = [];
const initialFirstTime = true;
const initialWasOperator = false;

function Calculator() {
  const [display, setDisplay] = useState([]);
  const [firstTime, setFirstTime] = useState(initialFirstTime);
  const [wasOperator, setWasOperator] = useState(initialWasOperator);

  function pushDivided() {
    if (display.length > 0 && wasOperator === false) {
      setDisplay(display.concat("/"));
      setWasOperator(true);
    }
  }
  function pushNine() {
    if (firstTime === false && display.length > 1) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(9));
    } else if (firstTime === true) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(9));
    }
  }
  function pushEight() {
    if (firstTime === false && display.length > 1) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(8));
    } else if (firstTime === true) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(8));
    }
  }
  function pushSeven() {
    if (firstTime === false && display.length > 1) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(7));
    } else if (firstTime === true) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(7));
    }
  }
  function pushTimes() {
    if (display.length > 0 && wasOperator === false) {
      setDisplay(display.concat("*"));
      setWasOperator(true);
    }
  }
  function pushSix() {
    if (firstTime === false && display.length > 1) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(6));
    } else if (firstTime === true) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(6));
    }
  }
  function pushFive() {
    if (firstTime === false && display.length > 1) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(5));
    } else if (firstTime === true) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(5));
    }
  }
  function pushFour() {
    if (firstTime === false && display.length > 1) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(4));
    } else if (firstTime === true) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(4));
    }
  }
  function pushMinus() {
    if (display.length > 0 && wasOperator === false) {
      setDisplay(display.concat("-"));
      setWasOperator(true);
    }
  }
  function pushThree() {
    if (firstTime === false && display.length > 1) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(3));
    } else if (firstTime === true) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(3));
    }
  }
  function pushTwo() {
    if (firstTime === false && display.length > 1) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(2));
    } else if (firstTime === true) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(2));
    }
  }
  function pushOne() {
    if (firstTime === false && display.length > 1) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(1));
    } else if (firstTime === true) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(1));
    }
  }
  function pushPlus() {
    if (display.length > 0 && wasOperator === false) {
      setDisplay(display.concat("+"));
      setWasOperator(true);
    }
  }
  function pushPeriod() {
    if (firstTime === false && display.length > 1) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat("."));
    }
  }
  function pushZero() {
    if (firstTime === false && display.length > 1) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(0));
    } else if (firstTime === true) {
      setWasOperator(initialWasOperator);
      setDisplay(display.concat(0));
    }
  }
  function clear() {
    setFirstTime(initialFirstTime);
    setDisplay(initialDisplay);
  }

  function joinedArr() {
    setDisplay([
      eval(
        display
          .join()
          .split("")
          .filter(function (c) {
            return c != ",";
          })
          .join("")
      ),
    ]);
  }

  function equals() {
    if (wasOperator === false) {
      setFirstTime(false);
      setDisplay(eval(joinedArr));
    }
  }
  console.log(
    `Was Operator? ${wasOperator}. True = no operators only numbers. False = Number or operator unless first in array = true.`
  );
  console.log(
    `Was First Time? ${firstTime}. True = Equal has not been pushed yet. False = equal has been pushed must start with an operator.`
  );
  return (
    <div className="calculator">
      <div className="row">
        <div className="display">
          <div className="displayBar">{display}</div>
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={pushSeven}>
          7
        </div>
        <div className="button" onClick={pushEight}>
          8
        </div>
        <div className="button" onClick={pushNine}>
          9
        </div>
        <div className="button" onClick={pushDivided}>
          <FaDivide />
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={pushFour}>
          4
        </div>
        <div className="button" onClick={pushFive}>
          5
        </div>
        <div className="button" onClick={pushSix}>
          6
        </div>
        <div className="button" onClick={pushTimes}>
          <FiX />
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={pushOne}>
          1
        </div>
        <div className="button" onClick={pushTwo}>
          2
        </div>
        <div className="button" onClick={pushThree}>
          3
        </div>
        <div className="button" onClick={pushMinus}>
          <FiMinus />
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={pushZero}>
          0
        </div>
        <div className="button" onClick={pushPeriod}>
          .
        </div>
        <div className="button" onClick={equals}>
          =
        </div>
        <div className="button" onClick={pushPlus}>
          <FiPlus />
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={clear}>
          <FiDelete />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
