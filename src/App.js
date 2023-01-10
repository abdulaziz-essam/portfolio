import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar.js";
import LandingPage from './components/landingPage/LandingPage';
import FlutterProject from './components/flutter/FlutterProject';
function App() {
  return (
    <div className="App">
<Navbar/>
<LandingPage />
<FlutterProject />
    </div>
  );
}

export default App;
