import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SetLoader from "./containers/SetLoader/SetLoader";
import Navbar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage addToCart={addToCart} />} />
          <Route path="/:id" element={<SetLoader />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
