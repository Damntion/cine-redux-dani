import React, { useEffect } from 'react';
import Head from './components/Head';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPeliculas } from './store/slices/counter';

function App() {
  const { films } = useSelector(state => state.peliculas);
  const { searchResults } = useSelector(state => state.buscar); // Acceder al estado de búsqueda
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeliculas());
  }, [dispatch]);

  const IMAGEN_PATH = "https://image.tmdb.org/t/p/original";

  let renderPeliculas = [];

  if (searchResults && searchResults.length > 0) {
    renderPeliculas = searchResults;
  } else if (films && films.length > 0) {
    renderPeliculas = films;
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Head />

      <div className="flex-1 container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {renderPeliculas.map(pelicula => (
          <Link to={`/PeliculaInfo/${pelicula.id}`} key={pelicula.id} className="hover:no-underline">
            <div className="bg-white rounded-md overflow-hidden shadow-md transition-transform transform hover:scale-105">
              <img
                src={`${IMAGEN_PATH}${pelicula.poster_path}`}
                alt={pelicula.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{pelicula.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {renderPeliculas.length === 0 && (
        <div className="text-center text-gray-700">No se encontraron resultados</div>
      )}
      <Footer/>
    </div>
    
  );
}

export default App;