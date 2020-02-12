import React, { useContext, createContext, useReducer } from 'react';
import itemsReducer, { itemsState } from '../reducers/items';

const ItemsContext = createContext(itemsState);

const Store = ({ children }) => (
  <ItemsContext.Provider value={useReducer(itemsReducer, itemsState)}>
    {children}
  </ItemsContext.Provider>
);

const useItems = () => useContext(ItemsContext);

export {
  Store as default,
  useItems,
};
