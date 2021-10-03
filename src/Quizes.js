import "./styles.css";
import Quizbox from "./Quiz";
import React from "react";

class Quizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Quiz: [
        {
          id: 1,
          value: "1",
          question: "start the quiz?",
          answer: 1.604,
          qno: 20,
          correct: 0,
          placeholder: "Enter # of Qnos?(default 20)",
          max: 10,
          operator: "",
          scoreCard: { "start the quiz?": [1.604, 1] }
        },
        {
          id: 2,
          value: "2",
          question: "start the quiz?",
          answer: 1.604,
          qno: 20,
          correct: 0,
          placeholder: "Enter # of Qnos?(default 20)",
          max: 10,
          operator: "",
          scoreCard: { "start the quiz?": [1.604, 1] }
        }
      ]
    };
    this.generateRandom = this.generateRandom.bind(this);
  }
  generateRandom(value, ans, max, op) {
    let Quiz = this.state.Quiz;
    // reset to start quiz ended
    if (Quiz[value - 1].qno < 0) {
      Quiz[value - 1]["question"] = "start the quiz?";
      Quiz[value - 1]["answer"] = 1.604;
      Quiz[value - 1]["qno"] = 20;
      Quiz[value - 1]["correct"] = 0;
      Quiz[value - 1]["placeholder"] = "Enter # of Qnos?(default 20)";
      Quiz[value - 1]["max"] = 10;
      Quiz[value - 1]["operator"] = "";
      Quiz[value - 1]["scoreCard"] = {};
      Quiz[value - 1]["scoreCard"]["start the quiz?"] = [1.604, 1];
      this.setState(Quiz);
      return;
    }

    //generate two random numbers and an operarter
    let rand1 = 1 + Math.floor(Math.random() * (max - 1)),
      rand2 = 1 + Math.floor(Math.random() * (max - 1)),
      rand,
      flag = 0;
    //user answered correctly
    if (Quiz[value - 1].answer == parseFloat(ans).toPrecision(3)) {
      Quiz[value - 1].correct++;
      Quiz[value - 1].scoreCard[Quiz[value - 1].question][1] = 1;
      flag = 1;
    } else {
      Quiz[value - 1].scoreCard[Quiz[value - 1].question][1] = 0;
    }
    //landing page
    if (Quiz[value - 1].answer == 1.604) {
      Quiz[value - 1].placeholder = "enter your answer";
      if (ans != "NULL") Quiz[value - 1].qno = parseInt(ans);
    }
    //generate a random operator from list provided by user
    let a = ["+", "-", "*", "/"];
    a = op == "" ? a : op.split(" ");
    rand = Math.random() * (a.length - 0);
    op = a[Math.floor(rand)];
    var result;
    switch (op) {
      case "+":
        result = rand1 + rand2;
        break;
      case "-":
        result = rand1 - rand2;
        break;
      case "*":
        result = rand1 * rand2;
        break;
      default:
        result = rand1 / rand2;
    }

    Quiz[value - 1].answer = result.toPrecision(3);
    console.log(Quiz[value - 1].answer);
    //generate a new question or display scorecard
    if (Quiz[value - 1].qno > 0) {
      Quiz[value - 1].question = "what is " + rand1 + op + rand2 + "?";
      Quiz[value - 1].qno--;
    } else {
      Quiz[value - 1].question =
        "Thank you, your score is " + Quiz[value - 1].correct;
      Quiz[value - 1].qno--;
    }
    Quiz[value - 1].scoreCard[Quiz[value - 1].question] = [
      result.toPrecision(3),
      flag
    ];
    this.setState(Quiz);
  }
  render() {
    return (
      <div style={{ display: "flex" }} className="App ">
        {
          <div style={{ display: "flex", margin: "10px" }}>
            <Quizbox
              onaction={this.generateRandom}
              question={this.state.Quiz[0].question}
              placeholder={this.state.Quiz[0].placeholder}
              scoreCard={this.state.Quiz[0].scoreCard}
              key={this.state.Quiz[0].id}
              value={this.state.Quiz[0].value}
              status={this.state.Quiz[0].qno}
              correct={this.state.Quiz[0].correct}
            />
            <Quizbox
              onaction={this.generateRandom}
              question={this.state.Quiz[1].question}
              placeholder={this.state.Quiz[1].placeholder}
              scoreCard={this.state.Quiz[1].scoreCard}
              key={this.state.Quiz[1].id}
              value={this.state.Quiz[1].value}
              status={this.state.Quiz[1].qno}
              correct={this.state.Quiz[0].correct}
            />
          </div>
        }
      </div>
    );
  }
}
export default Quizes;
