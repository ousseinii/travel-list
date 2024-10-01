import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [items, setItems] = useState([]);

  function hanldeItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (items.length === 0) return;

    const confirmed = window.confirm(
      'Êtes-vous sûr de vouloir supprimer tous les éléments ?'
    );

    if (confirmed) setItems([]);

    toast.success('Liste vidée !', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
    });
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={hanldeItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggle}
        onClearList={handleClearList}
      />
      <Stats items={items} />
      <ToastContainer />
    </div>
  );
}
