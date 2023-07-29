import React from 'react';

const PaymentMethod = ({ icon, name }) => {
  return (
    <div className="payment-method">
      <div className="payment-icon">{icon}</div>
      <p className="payment-name">{name}</p>
    </div>
  );
};

export default PaymentMethod;
 