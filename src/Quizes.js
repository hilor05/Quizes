import "./styles.css";
import Quizbox from './Quiz';
import React from 'react';

class Quizes extends React.Component {
  constructor (props){
  super(props);  
  this.state={
    Quiz:[
      {
        id:1,
        value:"1",
        question:"start the quiz?",
        answer:1.604,
        qno:20,
        correct:0,
        placeholder:"enter number of questions",
        max:10,
        operator:''
        },
        {
        id:2,
        value:"2",
        question:"start the quiz?",
        answer:1.604,
        qno:20,
        correct:0,
        placeholder:"enter number of questions",
        max:10,
        operator:''
        }
    ]
  }
  this.generateRandom = this.generateRandom.bind(this);
}
  generateRandom(value,ans,max,op){
    let Quiz = this.state.Quiz;
    console.log(Quiz[value-1]);
    if(Quiz[value-1].qno<0){
        Quiz[value-1]['question']="start the quiz?";
        Quiz[value-1]['answer']=1.604;
        Quiz[value-1]['qno']=20;
        Quiz[value-1]['correct']=0;
        Quiz[value-1]['placeholder']="enter number of questions";
        Quiz[value-1]['max']=10;
        Quiz[value-1]['operator']='';
        this.setState(Quiz);
        return;
    }
    
    //generate two random numbers and an operarter
   let rand1 = 1+Math.floor(Math.random() * (max - 1)),rand2=1+Math.floor(Math.random() * (max - 1)),rand;
   if(Quiz[value-1].answer.toString() == ans){
      Quiz[value-1].correct++;
   }
   if(Quiz[value-1].answer == 1.604){// check if it is the landiing page
      Quiz[value-1].placeholder="enter your answer";
      Quiz[value-1].qno=parseInt(ans);
   }
   rand = Math.random() * (4- 0);
   const a=['+','-','*','/'];
   if(op=='')
      op =a[Math.floor(rand)];
   var result;
   switch(op){
     case '+':
        result=rand1+rand2;
        break;
     case '-':
        result=rand1-rand2;
        break;
     case '*':
        result=rand1*rand2;
        break;
     default:
        result=rand1/rand2;
   }

   Quiz[value-1].answer = result;
   if(Quiz[value-1].qno>0){
    Quiz[value-1].question = "what is "+ rand1 +op+rand2 +"?";
    Quiz[value-1].qno--;
   }
   else{
    Quiz[value-1].question = "Thank you, your score is "+Quiz[value-1].correct;
    Quiz[value-1].qno--;
   }
   
   this.setState(Quiz);
  }
  render() {
    
    return(<div style={{display:"flex"}} className="App ">
      { <div style={{display:'flex',margin:"10px"}}>
         <Quizbox  onaction={this.generateRandom}  question={this.state.Quiz[0].question} placeholder={this.state.Quiz[0].placeholder} key={this.state.Quiz[0].id} value={this.state.Quiz[0].value} status={this.state.Quiz[0].qno}/>
         <Quizbox  onaction={this.generateRandom}  question={this.state.Quiz[1].question} placeholder={this.state.Quiz[1].placeholder} key={this.state.Quiz[1].id} value={this.state.Quiz[1].value} status={this.state.Quiz[1].qno}/>
         </div>
      }
    </div>);
  }
}
export default Quizes;
