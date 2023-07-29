import React from 'react';

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>Preço: R$ {item.price.toFixed(2)}</p>
        <p>Quantidade: {item.quantity}</p>
        <button onClick={() => removeItem(item.id)}>Remover do Carrinho</button>
      </div>
    </div>
  );
};

export default CartItem; 
