import { Routes, Route } from "react-router-dom";

import "./App.css";

//importe de componentes
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
