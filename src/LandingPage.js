import React, { useState } from "react";

//  const LandingPage = () => {

//     let [count, setCount] = useState(0)

//     return(
//         <div>
//             <h1>Counter</h1>
//             <p>{count}</p>
//             <button onClick={ ()=> setCount(count + 1)}>+</button>
//             <button onClick={ ()=> setCount(count - 1)}>-</button>
//             <button onClick={ ()=> setCount(0)}>Reset</button>
//         </div>
//     )

// }

class LandingPage extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };
  render() {
    return (
      <>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}
export default LandingPage;
