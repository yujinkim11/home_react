import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";

export const RouterBase = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={}/>
      </Routes>
    </Router>
  );
};
