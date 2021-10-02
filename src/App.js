import "./styles.css";
import Quizes from './Quizes';
import React, { Component } from 'react';

class App extends React.Component {
  render() {
    
    return(<div style={{display:"flex"}} className="App ">
      { 
        <Quizes/>
      }
    </div>);
  }
}
export default App;
