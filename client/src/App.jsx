import { Routes, Route } from "react-router-dom";

import "./App.css";

//importe de componentes
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/country/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
