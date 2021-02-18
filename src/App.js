import "./App.css";
import React from "react";
import LandingPage from "./LandingPage";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

const list = [
  {
    title: "Kelsey Dickson Portfolio",
    url: "https://kelseydickson.netlify.app/",
    author: "Kelsey",
    num_comments: 3,
    points: 10,
    objectID: 0
  }
];

class App extends React.Component {

  
  state = {
    currentUser: null,
    list
  };

handleLogin = currentUser => {
    // set current user, then redirect to home page
    this.setState({ currentUser }, () => {
      this.props.history.push("/home");
    });
  };

  // once button is clicked the list is removed
  onDismiss = (id) =>{
  const notId = item => item.objectID !==id
  const updatedList = this.state.list.filter(notId);
  this.setState({ list: updatedList}) ;
     }

  

  render() {
   
    return (
      <div>
      <>
        <NavBar />
        {/* <About /> */}
        <LandingPage />
        <form>
          <input type="text"
          onChange={this.onSearchChange}/>
          
        </form>
        {this.state.list.map(item => {
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick= {()=> this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
        </div>
          );
        
        }
        )
      
      }
        <Route path="/login">
          <Login handleLogin={this.handleLogin} />
        </Route>
        <Route path="/signup">
          <SignUp handleLogin={this.handleLogin} />
        </Route>
        <Route path="/home">
          {this.state.currentUser ? (
            <h1>Welcome, {this.state.currentUser.username} </h1>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </>
      </div>
    );

  }
}

export default withRouter(App);
