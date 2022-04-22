import "./App.css";
import Home from "./components/Home/Home";
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Login from "./components/Login/Login";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/accueil" element={<Home/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
