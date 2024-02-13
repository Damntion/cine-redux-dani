import { setPeliculaDetails } from "../counter/peliculasInfoSlice";

export const getPeliculaDetails = (id) => {
    return async (dispatch) => {
      const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=aee0fb70b982494aefc3785f75876035&language=es-ES&append_to_response=videos,credits`; 
  
      try {
        const response = await fetch(URL);
        
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }
  
        const data = await response.json();
        const trailerKey = data.videos && data.videos.results.length > 0 ? data.videos.results[0].key : null;
        
        dispatch(setPeliculaDetails({ film: data, trailerKey }));
      } catch (error) {
        console.error("Error en la solicitud Fetch:", error);
        // Puedes despachar acciones de manejo de errores aquí si lo deseas
      }
    };
  };
  