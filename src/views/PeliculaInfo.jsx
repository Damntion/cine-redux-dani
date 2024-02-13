import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Head from '../components/Head';
import Footer from '../components/Footer';
import YouTube from 'react-youtube';
import { useDispatch, useSelector } from 'react-redux';
import { getPeliculaDetails } from '../store/slices/counter';

const PeliculaInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { film, trailerKey } = useSelector(state => state.peliculaIn); 

  useEffect(() => {
    dispatch(getPeliculaDetails(id)); 
    }, []);

    const IMAGEN_PATH = "https://image.tmdb.org/t/p/original";
    
  return (
    <div className="min-h-screen flex flex-col">
      <Head />
      <div className="container mx-auto p-4">
        {film && (
          <>
            <h2 className="text-4xl font-bold mb-4 text-center">{film.title}</h2>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={`${IMAGEN_PATH}${film.poster_path}`}
                alt={film.title}
                className="w-72 h-auto object-cover mb-4 md:mr-4 md:mb-0 mx-auto md:mx-0"
              />
              <div className="md:flex-grow">
                <p className="text-gray-600 font-bold">Fecha de lanzamiento:</p>
                <p className="text-gray-600">{film.release_date}</p>
                <p className="text-gray-600 font-bold">Calificación:</p>
                <p className="text-gray-600">{film.vote_average}</p>
                <p className="text-gray-600 font-bold">Director:</p>
                <p className="text-gray-600">{film.credits?.crew?.find(person => person.job === 'Director')?.name}</p>
                <p className="text-gray-600 font-bold">Actores:</p>
                <p className="text-gray-600">{film.credits?.cast?.slice(0, 4).map(actor => actor.name).join(', ')}</p>
              </div>
            </div>
            <p className="text-gray-600 font-bold">Sinopsis:</p>
            <p className="text-justify text-gray-700 mb-4 w-1/2 mx-auto">{film.overview}</p>
            {/* Renderiza el reproductor de YouTube si hay un trailer disponible */}
            {trailerKey && (
              <div className="my-8 text-center">
                <h3 className="text-xl font-bold mb-2">Trailer</h3>
                <YouTube videoId={trailerKey} opts={{ height: '390', width: '640' }} />
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PeliculaInfo;
