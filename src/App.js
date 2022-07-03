import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar.js";
import LandingPage from './components/landingPage/LandingPage';
function App() {
  return (
    <div className="App">
<Navbar/>
<LandingPage />
    </div>
  );
}

export default App;
