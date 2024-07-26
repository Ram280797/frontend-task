import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Index() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3002/items');
        setItems(response.data);
      } catch (err) {
        console.error('Error fetching items', err);
      }
    };
    fetchItems();
  }, []);

  const handleAddItem = async (event) => {
    event.preventDefault();
    const newItem = { id: Date.now(), name: newItemName };

    setItems((prevItems) => [...prevItems, newItem]);
    setNewItemName('');

    try {
      await axios.post('http://localhost:3002/items', newItem);
    } catch (err) {
      // Revert the UI update if the request fails
      setItems((prevItems) => prevItems.filter((item) => item.id !== newItem.id));
      setError('Failed to add item');
      console.error('Error adding item', err);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="New item name"
          required
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default Index;
