import React from 'react';
import { createContext, useState } from 'react';

interface IInitialContext {
  modal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const InitialContext = createContext<IInitialContext>({
  modal: false,
  openModal: () => {},
  closeModal: () => {},
});

export const InitialState = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <InitialContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </InitialContext.Provider>
  );
};
