import React, { createContext, useContext, useEffect, useState } from 'react';

const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {    
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);    
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  return (
    <LocalStorageContext.Provider value={{ cartItems, updateCartItems }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorage = () => { 
  return useContext(LocalStorageContext);
};
