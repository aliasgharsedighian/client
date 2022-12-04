import "./App.css";
import "./flexboxgrid.css";
import UserNavbar from "./Components/Navbar/userNavbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import { useState } from "react";
import { ThemeContext } from "./Context/Context";
import LoginPage from "./Components/LoginPage/loginPage";
import CreateAccount from "./Components/LoginPage/CreateAccount";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import HomePageProducts from "./Components/Products/Products";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Footer from "./Components/Footer/Footer";
import Drawer from "@mui/material/Drawer";
import Cart from "./Components/Cart/Cart";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState("light");

  const getTotalItems = (items) =>
    items.reduce((ack, items) => ack + items.amount, 0);

  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      //1.Is the item already added in the cart
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      //First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div className="App" id={theme}>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        <UserNavbar
          setCartOpen={setCartOpen}
          getTotalItem={getTotalItems}
          cartItems={cartItems}
        />
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
      </ThemeContext.Provider>

      <Routes>
        <Route
          path="/"
          element={<HomePage handleAddToCart={handleAddToCart} />}
        />
        <Route path="/products" element={<HomePageProducts />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
