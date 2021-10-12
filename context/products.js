import { createContext, useContext } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children, products }) => {
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => {
  return useContext(ProductsContext);
}