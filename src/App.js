
import './App.css';
import LandingPage from './LandingPage'
import NavBar from './components/NavBar/NavBar'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <LandingPage />
    </div>
  );
}

export default App;
