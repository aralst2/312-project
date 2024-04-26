import "./styles/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Ingredients from "./pages/Ingredients";
import Account from "./pages/Account";

function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

function Main() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
