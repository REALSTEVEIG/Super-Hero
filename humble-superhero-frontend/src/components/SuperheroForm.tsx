import React, { useState } from 'react';

interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

interface SuperheroFormProps {
  addSuperhero: (superhero: Superhero) => void;
}

function SuperheroForm({ addSuperhero }: SuperheroFormProps) {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && superpower && humilityScore) {
      const newSuperhero = { name, superpower, humilityScore: Number(humilityScore) };
      addSuperhero(newSuperhero);
      setName('');
      setSuperpower('');
      setHumilityScore('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="superhero-form">
      <input
        type="text"
        placeholder="Superhero Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Superpower"
        value={superpower}
        onChange={(e) => setSuperpower(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Humility Score (1-10)"
        value={humilityScore}
        onChange={(e) => setHumilityScore(e.target.value)}
        min="1"
        max="10"
        required
      />
      <button type="submit">Add Superhero</button>
    </form>
  );
}

export default SuperheroForm;
