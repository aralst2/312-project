import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Ingredients from "./pages/Ingredients";
import Account from "./pages/Account";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/recipes" element= {<Recipes />}/>
          <Route path = "/ingredients" element= {<Ingredients />}/>
          <Route path = "/account" element= {<Account />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

