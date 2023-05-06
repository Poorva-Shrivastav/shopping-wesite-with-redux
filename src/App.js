import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListings from "./components/ProductListings";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListings />} />
          <Route path="/product/:id" exact element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
