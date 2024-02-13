import { setSearchResults } from "../counter/buscadorSlice";

export const buscarPeliculas = (term) => async (dispatch) => {
  try {
    // Se inicia la búsqueda, por lo que podrías querer disparar una acción que muestre un indicador de carga
    // dispatch(startSearch()); 

    const URL = "https://api.themoviedb.org/3";
    const KEY = "aee0fb70b982494aefc3785f75876035";
    const parametros = {
      api_key: KEY,
      language: "es-ES",
      sort_by: "popularity.desc",
      query: term.trim(), // Se usa el término de búsqueda proporcionado
    };

    const queryString = new URLSearchParams(parametros).toString();

    const response = await fetch(`${URL}/search/movie?${queryString}`);

    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }

    const data = await response.json();
    const results = data.results; // Películas que coinciden con el término de búsqueda

    // Se actualizan los resultados de búsqueda en el estado
    dispatch(setSearchResults(results));
  } catch (error) {
    console.error('Error al buscar películas:', error);
  
  }
};
