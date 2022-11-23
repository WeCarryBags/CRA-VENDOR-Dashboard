import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "./screens/homepage";

import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
