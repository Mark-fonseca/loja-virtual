import React from 'react';
import PaymentMethod from './PaymentMethod';
import './CartTotal.css';

const CartTotal = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // formas de pagamento (adicionar mais se eu quiser)
  const paymentMethods = [
    { name: 'Cartão de Crédito', icon: <i className="fas fa-credit-card"></i> },
    { name: 'Cartão de Débito', icon: <i className="fas fa-credit-card"></i> },
    { name: 'PayPal', icon: <i className="fab fa-paypal"></i> },
    { name: 'Boleto Bancário', icon: <i className="fas fa-barcode"></i> },
  ];

  return (
    <div className="cart-total">
      <h2>Total do Carrinho</h2>      
      <div className="payment-methods">
        <h3>Escolha o Método de Pagamento:</h3>
        <div className="methods-list">
          {paymentMethods.map((method) => (
            <PaymentMethod key={method.name} icon={method.icon} name={method.name} />
          ))}
        </div>       
        <p className="total-label">Total: R$ {total.toFixed(2)}</p>       
        <button className="confirm-button">Confirmar Compra</button>
      </div>
    </div>
  ); 
};

export default CartTotal;
