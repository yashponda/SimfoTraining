import React, {useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import "./index.css";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsShown, setcartIsShown] = useState(false);

    const showCartHandler = ()=>{
        setcartIsShown (true);
    };
    const hideCartHandler = ()=>{
        setcartIsShown (false);
    };
    
    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Header onShowCart= {showCartHandler}/>
            <Meals/>
        </CartProvider>
    );
}

export default App;