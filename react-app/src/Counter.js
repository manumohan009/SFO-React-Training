
import React from 'react';
export default class Counter extends React.Component {
    constructor(props){
      super(props);
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
      this.state = {counterValue:this.props.initialVal}
    }
    increment(){
      this.setState({counterValue:this.state.counterValue+1})
    }
    decrement(){
      this.setState({counterValue:this.state.counterValue-1})
    }
    reset(){
      this.setState({counterValue:0})
    }
    render(){
      return(          
      <div>
        <div>Counter Value {this.state.counterValue}</div>
        <div>
          <span><button onClick={this.decrement}>-</button></span>
          <span><button onClick={this.reset}>R</button></span>
          <span><button onClick={this.increment}>+</button></span>
  
        </div>
      </div>)
    }
  }
  
export class Counter1 extends React.Component {
    constructor(props){
      super(props);
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
      this.state = {counterValue:this.props.initialVal}
    }
    increment(){
      this.setState({counterValue:this.state.counterValue+1})
    }
    decrement(){
      this.setState({counterValue:this.state.counterValue-1})
    }
    reset(){
      this.setState({counterValue:0})
    }
    render(){
      return(          
      <div>
        <div>Second Counter Value {this.state.counterValue}</div>
        <div>
          <span><button onClick={this.decrement}>-</button></span>
          <span><button onClick={this.reset}>R</button></span>
          <span><button onClick={this.increment}>+</button></span>
  
        </div>
      </div>)
    }
  }