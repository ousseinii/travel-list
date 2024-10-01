import { useState } from 'react';

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function hanldeSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, package: false, id: Date.now() };
    onAddItems(newItem);
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className='add-form' onSubmit={hanldeSubmit}>
      <h3>De quoi avez-vous besoin pour votre 😍 voyage ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Ajouter quelque chose...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Ajouter</button>
    </form>
  );
}
