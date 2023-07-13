import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomeP from "./pages/HomeP";
import CartP from "./pages/CartP";
import FavoriteP from "./pages/FavoriteP";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeP />} />
          <Route path="cart" element={<CartP />} />
          <Route path="favorite" element={<FavoriteP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
