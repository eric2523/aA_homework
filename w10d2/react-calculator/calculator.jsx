import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // your code here
    this.state = { num1: "", num2: "", result: 0 };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  // your code here
  setNum1(e) {
    e.preventDefault();
    const num1 = e.target.value ? parseInt(e.target.value) : ""
    this.setState({ num1 })
  }

  setNum2(e) {
    e.preventDefault();
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 })
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{ result }</h1> 
        <input onChange={ this.setNum1 } value={ num1 }/>
        <input onChange={ this.setNum2 } value={ num2 }/>
      </div>
    );
  }
}

export default Calculator;
