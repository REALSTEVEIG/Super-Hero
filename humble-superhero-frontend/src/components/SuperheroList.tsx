import { useEffect, useState } from 'react';
import axios from 'axios';

interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

function SuperheroList() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/superheroes')
      .then((response) => {
        setSuperheroes(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the superheroes!', error);
      });
  }, []);

  return (
    <div className="superhero-list">
      <h2>Superheroes List</h2>
      {superheroes.length > 0 ? (
        <ul aria-label="List of Superheroes">
          {superheroes.map((hero, index) => (
            <li key={index} className="superhero-card">
              <div className="hero-info">
                <h3>{hero.name}</h3>
                <p>
                  <strong>Superpower:</strong> {hero.superpower}
                </p>
                <p>
                  <strong>Humility Score:</strong> {hero.humilityScore}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No superheroes found!</p>
      )}
    </div>
  );
}

export default SuperheroList;
