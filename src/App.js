import "./styles.css";
import Quizes from "./Quizes";
import React, { Component } from "react";

class App extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }} className="App ">
        {
          <div
            style={{
              border: "2px dashed #008CBA",
              margin: "auto"
            }}
          >
            <h1 style={{ color: "#008CBA" }}>Happy Quizzing!</h1>
            <Quizes />
            <p style={{ fontSize: "10px" }}>
              *Note: make sure to round up to 3 decimal places for large
              floating values
            </p>
            <p style={{ fontSize: "10px" }}>
              **Note: enter operators (space seperated) among ' + ', ' - ', ' /
              ' ,' * ' only (default: all operators)
            </p>
          </div>
        }
      </div>
    );
  }
}
export default App;
