import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div
        className="fixed bg-black/70 top-0 right-0 left-0 bottom-0"
        onClick={onClose}
        data-testid="modal"
      />
      <div className="px-6 rounded w-[500px] p-5 bg-white absolute top-24 left-1/2 -translate-x-1/2">
        <button
          className="fixed rounded top-3 right-3  bg-gray-300 text-white text-m px-3 py-1"
          onClick={onClose}
        >
          X
        </button>
        <h1 className="text-2xl text-center mb-2 text-gray-800 font-bold">{title}</h1>
        {children}
      </div>
    </>
  );
}
