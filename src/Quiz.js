import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
class Quizbox extends React.Component {
  constructor (props){
  super(props);  
  this.state={
    q:{ans:"",max:20,op:''}
  }
  this.redraw = this.redraw.bind(this);
  this.change = this.change.bind(this);
  this.renderinput = this.renderinput.bind(this);
  this.getMax = this.getMax.bind(this);
  this.getOp = this.getOp.bind(this);
}
  renderinput(){
    if(this.props.status>-1){
        return <input onChange={this.change} placeholder={this.props.placeholder}/>;
    }
  }
  renderOps(){
    if(this.props.question == "start the quiz?"){
        return (<div style = {{display:"inline-flex"}}>
            <input onChange={this.getMax} style={{margin:"8px",width:"50%"}} placeholder={"max range"}/>
            <input onChange={this.getOp} style={{margin:"8px", width:"50%"}} placeholder={"enter operator"}/>
          </div>);
    }
  }
  getMax(event){
    var q=this.state.q;
    q.max=parseInt(event.target.value);
    this.setState(q);
  }
  getOp(event){
    var q=this.state.q;
    q.op=event.target.value.toString();
    this.setState(q);
  }
  change(event){
    var q=this.state.q;
    q.ans=event.target.value.toString();
    this.setState(q);
  }
  redraw(){
    this.props.onaction(this.props.value,this.state.q.ans,this.state.q.max,this.state.q.op);
  }
  renderButtonText(){
    if(this.props.question == "start the quiz?"){
      return "Begin";
    }
    else if(this.props.status <0){
      return "fin, reset?";
    }
    else{
      return "Submit & next"
    }
  }
  render() {  
    return (
      <div>
          <div style={{ display: 'block',
                  width: '200px', border: '2px solid ',margin : "10px" }}>
          <div style={{ margin : "10px" }}>{this.props.question}</div>
          {this.renderinput()}
          {this.renderOps()}
          <span>
            <button style={{ margin : "10px" }} onClick = {this.redraw} id={`button_${this.props.value}`}>{this.renderButtonText()}</button>
          </span>
        </div>       
      </div>
    );
  }
}
export default Quizbox;