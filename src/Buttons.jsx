import React from "react";
import { Button } from "./Button";

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render ()
  {
    
    //// onPlus FUNCTION START code 
    const onPlus = () => {
      this.setState({ count: this.state.count + 1 });
    };


    //// onMinus FUNCTION START code 
    const onMinus = () => {
      this.setState({ count: this.state.count - 1 });
    };


  //// onCheck FUNCTION START code 
    const onCheck = (n) => {
      let sum = 0;
      for (let i = 1; i < n; i++) {
        if (n % i === 0) {
          sum++;
        }
      }
      if (sum === 1) {
        return "tub";
      } else if (n % 2 === 0) {
        return "juft";
      } else return "toq";
    };
    return (
      <div className="container">
        <div className="count">
          <button onClick={onPlus}>+</button>
          <h1>{this.state.count}</h1>
          <button onClick={onMinus}>-</button>
        </div>
        <div className="buttons">
          <Button type={onCheck(this.state.count)}>
            {this.state.count} <sub>{onCheck(this.state.count)} son</sub>{" "}
          </Button>
          <Button type={onCheck(this.state.count + 1)}>
            {this.state.count + 1}{" "}
            <sub>{onCheck(this.state.count + 1)} son</sub>
          </Button>
          <Button type={onCheck(this.state.count + 2)}>
            {this.state.count + 2}{" "}
            <sub>{onCheck(this.state.count + 2)} son</sub>
          </Button>
        </div>
      </div>
    );
  }
}
