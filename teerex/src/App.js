import { useState } from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import { SnackbarProvider } from "notistack";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<LandingPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </SnackbarProvider>
    </div>
  );
}

export default App;
