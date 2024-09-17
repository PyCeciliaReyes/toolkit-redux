//todos lo relacionado a pokemon slice para peticiones http
import {setPokemons, startLoadingPokemons} from './pokemonSlice';


export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch( startLoadingPokemons());
        //todo realizar la peticion http
        //data-pokemons
        //dispatch(setPokemons(data-pokemons));
    }
}