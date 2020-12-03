
import './App.css';
import React from 'react'
import LandingPage from './LandingPage'
import NavBar from './components/NavBar/NavBar'
import About from './components/About'
import SignUp from './components/SignUp/SignUp'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'

class App extends React.Component {
  state ={
    currentUser: null
  }
  
  handleLogin = currentUser => {
    // set current user, then redirect to home page
    this.setState({ currentUser }, () => {
      this.props.history.push('/home')
    })
  }
  
    render(){
      console.log("app in state",this.state)
  return (
    <>
      <NavBar />
      <About />
      <LandingPage />
      <Route path="/signup">
        <SignUp handleLogin={this.handleLogin}/>
      </Route>
      <Route path="/home">
              {this.state.currentUser ? <h1>Welcome, {this.state.currentUser.username} </h1> : <Redirect to='/' />}
      </Route>
      
    </>
  );
}
}

export default withRouter(App);
