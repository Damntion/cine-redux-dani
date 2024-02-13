import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../store/slices/counter';
import { buscarPeliculas } from '../store/slices/counter';


function Head() {
  const dispatch = useDispatch();
  const [peliculaBuscada, setPeliculaBuscada] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(buscarPeliculas(peliculaBuscada));
  }

  return (
    <div>
      <header className="flex items-center justify-between h-20 px-4 md:px-6 bg-gray-800 text-white">
        <Link to="/" className="text-xl font-bold">
          <span className="sr-only">Digital Cinema</span>
          🎬
        </Link>

        <nav className="flex-1 mx-4">
          <form className="relative" onSubmit={handleSubmit}>
            <input
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
              id="search"
              placeholder="Buscar películas..."
              type="search"
              onChange={(e) => setPeliculaBuscada(e.target.value)}
            />
          </form>
        </nav>

        <div className="flex space-x-4">
          <Link to="/Formulario" className="text-sm font-medium hover:underline">
            Reservar
          </Link>
        </div>
      </header>

      <div className="w-max text-center">
      </div>
    </div>
  );
}

export default Head;