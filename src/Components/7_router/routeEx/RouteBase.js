import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Menu1 } from "./Menu1";
import { Menu2 } from "./Menu2";
import { Navi } from "./Navi";

export const RouteBase = () => {
  return (
    <Router>
      <Navi />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu1" element={<Menu1 />} />
        <Route path="/menu2" element={<Menu2 />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};
