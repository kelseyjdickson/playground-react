import React from "react";
import styled from 'styled-components'
import { Button } from './styles'







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

<br></br>
<br></br>
<br></br>
<br></br>


        
        <Button>Click Me!</Button>


<br></br>
<br></br>
<br></br><br></br><br></br><br></br>

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
