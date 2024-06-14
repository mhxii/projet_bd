import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Auteur = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/publication')
      .then(response => {
        setAuthors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the authors!', error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des Auteurs</h1>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ul>
    </div>
  );
};

export default Auteur;
