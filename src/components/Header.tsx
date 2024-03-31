import { useState } from 'react';

import Cart from './Cart.tsx';
import { useCartSelector } from '../hooks/hooks.ts';

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const cart = useCartSelector((state) => state.cart.items)

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Andrew's Redux Store</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cart.length})</button>
        </p>
      </header>
    </>
  );
}
