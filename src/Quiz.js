import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
class Quizbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: { ans: "NULL", max: 20, op: "", count: 0 }
    };
    this.redraw = this.redraw.bind(this);
    this.change = this.change.bind(this);
    this.renderinput = this.renderinput.bind(this);
    this.getMax = this.getMax.bind(this);
    this.getOp = this.getOp.bind(this);
    this.renderScoreCard = this.renderScoreCard.bind(this);
  }
  renderinput() {
    if (this.props.status > -1) {
      return (
        <div>
          <input
            style={{ width: "90%" }}
            onChange={this.change}
            placeholder={this.props.placeholder}
          />
        </div>
      );
    }
  }
  renderCurrentScore() {
    if (this.props.status >= 0 && this.props.question !== "start the quiz?") {
      return (
        <p style={{ color: "orange" }}>current score :{this.props.correct}</p>
      );
    }
  }
  renderOps() {
    if (this.props.question == "start the quiz?") {
      return (
        <div style={{ display: "inline-flex", margin: "auto" }}>
          <input
            onChange={this.getMax}
            style={{ margin: "8px", width: "50%" }}
            placeholder={"max range"}
          />
          <input
            onChange={this.getOp}
            style={{ margin: "8px", width: "50%" }}
            placeholder={"enter operator"}
          />
        </div>
      );
    }
  }
  renderScoreCard() {
    if (this.props.status < 0) {
      //console.log(this.props.scoreCard);
      return (
        <div style={{ border: "2px double #008CBA", margin: "auto" }}>
          {Object.keys(this.props.scoreCard).map(function (index, i) {
            //console.log(i);
            //console.log(index);
            if (i < Object.keys(this.props.scoreCard).length - 1 && i > 0) {
              return (
                <p key={i}>
                  <span>Question: {index}</span>
                  <span
                    style={{
                      color:
                        this.props.scoreCard[index][1] == 0 ? "red" : "green"
                    }}
                  >
                    {console.log(index)}
                    Answer: {this.props.scoreCard[index][0]}
                  </span>
                </p>
              );
            } else return "";
          }, this)}
        </div>
      );
    }
  }
  getMax(event) {
    var q = this.state.q;
    q.max = parseInt(event.target.value);
    this.setState(q);
  }
  getOp(event) {
    var q = this.state.q;
    q.op = event.target.value.toString();
    this.setState(q);
  }
  change(event) {
    var q = this.state.q;
    q.ans = event.target.value.toString();
    this.setState(q);
  }
  redraw() {
    this.props.onaction(
      this.props.value,
      this.state.q.ans,
      this.state.q.max,
      this.state.q.op
    );
  }
  renderButtonText() {
    if (this.props.question == "start the quiz?") {
      return "Begin";
    } else if (this.props.status < 0) {
      return "fin, reset?";
    } else {
      return "Submit & next";
    }
  }
  render() {
    return (
      <div>
        <div
          style={{
            display: "block",
            width: "200px",
            border: "2px solid #008CBA",
            margin: "10px"
          }}
        >
          <div style={{ margin: "10px" }}>{this.props.question}</div>
          {this.renderinput()}
          {this.renderOps()}
          {this.renderScoreCard()}
          <span>
            <button
              style={{ margin: "10px" }}
              onClick={this.redraw}
              id={`button_${this.props.value}`}
            >
              {this.renderButtonText()}
            </button>
            {this.renderCurrentScore()}
          </span>
        </div>
      </div>
    );
  }
}
export default Quizbox;
