import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter, { Counter1 } from './Counter';



class Header extends React.Component {
  constructor(props){
    super(props);
    console.log('In constructor');
  }



  // componentWillMount(){
  //   console.log('in componentWillMount')    
  // }
  // componentWillUpdate(){
  //   console.log('in componentWillUpdate')
  // }
  // componentWillUnmount(){
  //   console.log('in componentWillUnMount');
  // }
  componentDidMount(){
    console.log('in componentDidMount');
  }
  // componentDidUpdate(){
  //   console.log('in componentDidUpdate');
  // }
  // componentDidCatch(){
  //   console.log('in componentDidCatch');
  // }
  
  render(){
    return(
      <h1>{this.props.title}</h1>
      
    )
  }
}



class App extends React.Component {
  constructor(props){
    super(props);
    this.addMe = this.addMe.bind(this);
    this.updateText = this.updateText.bind(this);
    this.doShow = this.doShow.bind(this);
    this.state = {count:0,textValue:'',show:false}
  }

  addMe(){
    console.log('in addMe');
    this.setState({count: this.state.count + 1})
  }
  updateText(e){
    // console.log('in updateText',e);
    this.setState({textValue:e.target.value});

  }
  doShow(){
    console.log('in doshow',this.state.show)
    // let show = this.state.show;
    // show = !show;
    this.setState({show:!this.state.show})
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
          <Header title={'Home 1'}/>
          <Counter initialVal={10}/>
          <Counter1 initialVal={10}/>
          {/* <Counter initialVal={2}/> */}
          <div>
            <hr/>
          </div>
        <button onClick={this.addMe}>Add</button>
        <p>Value of count  = {this.state.count}</p>
        { this.state.show && <p>Value of text  = {this.state.textValue }</p> }
        <input type="text" onChange={this.updateText}/>
        <button onClick={this.doShow}>Show</button>
      </header>
    </div>
    )}
}



export default App;
