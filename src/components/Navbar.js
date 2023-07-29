import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [cartItemCount, setCartItemCount] = useState(0);
  
  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(totalItems);
  }, [cartItems]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Minha Loja</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            <span className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
            </span>
            Carrinho {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
