import React from 'react';

interface ModalState {
  state: Record<string, never>;
}

interface ModalProps {
  children: React.ReactNode;
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
          className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
          onClick={this.props.onClose}
          data-testid="modal"
        />
        <div className="w-[500px] p-5 bg-white absolute top-10 left-1/2 -translate-x-1/2">
          <button
            className="fixed top-3 right-3  bg-gray-300 text-white text-m px-3 py-1"
            onClick={this.props.onClose}
          >
            x
          </button>
          <h1 className="text-2xl text-center mb-2">{this.props.title}</h1>
          {this.props.children}
        </div>
      </>
    );
  }
}
