import React from 'react';
import './card.css';
const Card = ({ item, handleEdit, handleDelete }) => {
  return (
    <div className="card">
      <p>{item}</p>
      <div className="card-buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
