import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Cars from "./pages/cars/Cars";
import Bikes from "./pages/bikes/Bikes";
import WhisList from "./pages/whislist/WishList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/whishlist" element={<WhisList />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
