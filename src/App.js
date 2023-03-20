import {useState } from "react";

import { Route, Routes } from 'react-router-dom';
import Navbar from './TshirtComponents/Navbar/Navbar';
import TshirtListForm from './TshirtComponents/TshirtListForm/TshirtListForm';
import TshirtListCart from "./TshirtComponents/TshirtListCart/TshirtListCart";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import AvailableTshirts from "./components/Tshirts/AvailableTshirts";

function App() {
  const[cardIsShown,setCardIsShown] = useState(false);

  const showCartHandler = () =>{
    setCardIsShown(true);
  }
  const hideCartHandler = () =>{
    setCardIsShown(false);
  }

  return (
    <CartProvider>
      {cardIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Navbar />
      <Routes>
      <Route  path='/tshirtListForm' element={ <TshirtListForm />}/>
      <Route path='/cart' element={<TshirtListCart/>}/>
      </Routes>
      <AvailableTshirts />
    </CartProvider>
  );
}

export default App;