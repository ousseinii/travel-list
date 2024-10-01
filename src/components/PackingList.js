import { useState } from 'react';
import Item from './Item';

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;

  if (sortBy === 'input') {
    sortedItems = items;
  }

  if (sortBy === 'description') {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === 'packed') {
    sortedItems = items.slice().sort((a, b) => {
      // Trier par statut (emballé en premier)
      if (a.packed === b.packed) {
        // Si les statuts sont identiques, trier par ID (du plus récent au plus ancien)
        return b.id - a.id; // Cela garde les éléments les plus récents en premier
      }
      return a.packed ? -1 : 1; // Mettre les emballés en premier
    });
  }

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Trier par ordre d'ajout</option>
          <option value='description'>Trier par description</option>
          <option value='packed'>Trier par statut de paquet</option>
        </select>
        <button onClick={onClearList}>Vider la liste</button>
      </div>
    </div>
  );
}
