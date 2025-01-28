import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SuperheroForm from './components/SuperheroForm';
import SuperheroList from './components/SuperheroList';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

function App() {
  const addSuperhero = (superhero: Superhero) => {
    axios
      .post('http://localhost:3000/superheroes', superhero)
      .then(() => {
        toast.success('Superhero added successfully!');
      })
      .catch((error) => {
        console.log('error', error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <Router>
      <div className="App">
        <h1>Humble Superheroes</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SuperheroForm addSuperhero={addSuperhero} />
                <Link to="/superheroes">
                  <button className="view-button" style={{ marginTop: '1rem' }}>
                    View Superheroes
                  </button>
                </Link>
              </>
            }
          />
          <Route path="/superheroes" element={<SuperheroList />} />
        </Routes>
        <ToastContainer /> {/* Add ToastContainer here */}
      </div>
    </Router>
  );
}

export default App;
