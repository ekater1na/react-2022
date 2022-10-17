import React from 'react';
import { ICharacter } from '../../models';

interface ModalState {
  state: Record<string, never>;
}

interface ModalProps {
  children: React.ReactNode;
  parentToChild: ICharacter;
  title: string;
  onClose: () => void;
}

export class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
  }

  render() {
    return (
      <>
        <div
          className="fixed bg-black/70 top-0 right-0 left-0 bottom-0"
          onClick={this.props.onClose}
          data-testid="modal"
        />
        <div className="px-6 rounded w-[500px] p-5 bg-white absolute top-24 left-1/2 -translate-x-1/2">
          <button
            className="fixed rounded top-3 right-3  bg-gray-300 text-white text-m px-3 py-1"
            onClick={this.props.onClose}
          >
            X
          </button>
          <h1 className="text-2xl text-center mb-2 text-gray-800 font-bold">{this.props.title}</h1>
          {this.props.children}
        </div>
      </>
    );
  }
}
