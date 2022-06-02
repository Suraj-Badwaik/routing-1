import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import EachProduct from "./components/EachProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="products/*" element={<Products />}>
          <Route path=":id" element={<EachProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
