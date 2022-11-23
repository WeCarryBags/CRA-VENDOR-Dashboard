import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "./screens/homepage";
import { NavSVG } from "./navSVG";
import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <NavBar />
      <NavSVG />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
