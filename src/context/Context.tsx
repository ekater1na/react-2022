import React from 'react';
import { createContext, useState } from 'react';

interface IProductContext {
  modal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ProductContext = createContext<IProductContext>({
  modal: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ProductState = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <ProductContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ProductContext.Provider>
  );
};
