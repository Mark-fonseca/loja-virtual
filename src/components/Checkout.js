import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  /* const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0); */

  return (
    <div className="checkout-container">
      <div className="product-list">
        <h2>Produtos no Carrinho</h2>
        {cartItems.length === 0 ? (
          <p>Nenhum item no carrinho.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeItem={() => removeItemFromCart(item.id)}
              />
            ))}
          </ul>
        )}
      </div>
      <div className="cart-section"> 
        <CartTotal cartItems={cartItems} />       
      </div>
    </div>
  );
};

export default Checkout;
