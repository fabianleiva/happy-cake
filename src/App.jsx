import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./view/Home";
import Contact from "./view/Contact";
import NotFound from "./view/NotFound";

function App() {
  return (
    <>
      <div className="container">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
