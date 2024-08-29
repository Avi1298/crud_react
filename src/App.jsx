import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (inputValue.trim() === '') return;

    if (editingIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editingIndex ? inputValue : index
      );
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      setItems([...items, inputValue]);
    }
    setInputValue('');
  };

  const handleEdit = (index) => {
    setInputValue(items[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
    setItems(updatedItems);
  };

  return (
    <>
      <div style={{ flexDirection: 'row', alignItems: 'center' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add Items"
        />
        <button onClick={handleAdd}>
          {editingIndex !== null ? 'Edit item' : 'Add item'}
        </button>
      </div>
      <div>
        {items?.map((item, index) => (
          <Card
            key={index}
            item={item}
            handleEdit={() => handleEdit(index)}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
