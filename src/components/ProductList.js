import React, { useContext } from 'react';
import products from '../data/data';
import './ProductList.css';
import { CartContext } from './CartContext';

const ProductList = () => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product-list">
      <h2>Produtos Disponíveis</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Preço: R$ {product.price}</p>
              <button onClick={() => addItemToCart(product)}>Adicionar ao Carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 
 