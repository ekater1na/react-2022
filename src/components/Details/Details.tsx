import React, { useState } from 'react';
import { ICharacter } from '../../models';

interface CharacterProps {
  character: ICharacter;
}
interface CreateProductProps {
  onOpen: (character: ICharacter) => void;
}

// const productData: IProduct = {
//   title: '',
//   price: 13.5,
//   description: 'lorem ipsum set',
//   image: 'https://i.pravatar.cc',
//   category: 'electronic',
//   rating: {
//     rate: 40,
//     count: 10,
//   },
// };

export function Details({ onOpen }: CreateProductProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    // productData.title = value;

    if (value.trim().length === 0) {
      setError('Please enter valid title');
      return;
    }

    // const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
    //
    // onOpen(response.data);
  };

  return (
    <div className="container mx-auto" data-testid="details">
      <p>Test</p>
    </div>
  );
}
