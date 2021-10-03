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
          </div>
        }
      </div>
    );
  }
}
export default App;
