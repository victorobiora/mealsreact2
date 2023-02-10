import Header from "./Components/Layout/Header";
import { React, useState } from 'react';
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
       setCartIsShown(true)
  };

  const hideCartHandler = ()=> {
        setCartIsShown(false)
  }
  return <CartProvider>
        {cartIsShown && <Cart removeCart = {hideCartHandler}/>}
        <Header onClick = {showCartHandler}/>   
            <main>
                <Meals/>
            </main>
         </CartProvider>
}

export default App;
