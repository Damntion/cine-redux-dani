import { startLoadingPeliculas, setPeliculas } from "../counter/peliculasSlice";

export const getPeliculas = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPeliculas());
        
        const URL = "https://api.themoviedb.org/3";
        const KEY = "aee0fb70b982494aefc3785f75876035";
        const busquedas = getState().busquedas; // Supongamos que tienes un slice llamado "busquedas" para obtener el término de búsqueda

        const parametros = {
            api_key: KEY,
            language: "es-ES",
            sort_by: "popularity.desc",
            query: busquedas ? `${busquedas}` : '',
        };

        const queryString = new URLSearchParams(parametros).toString();

        try {
            const response = await fetch(`${URL}/${parametros.query ? 'search' : 'discover'}/movie?${queryString}`);
            
            if (!response.ok) {
                throw new Error(`Error de red: ${response.status}`);
            }

            const data = await response.json();
            dispatch(setPeliculas({ films: data.results }));
        } catch (error) {
            console.error("Error en la solicitud Fetch:", error);
            // Puedes despachar acciones de manejo de errores aquí si lo deseas
        }
    };
};

