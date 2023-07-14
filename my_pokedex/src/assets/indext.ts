import axios from "axios";

export const getPokemons = async (
  pageOfPokemons: string,
  setPokemonsList: (value: []) => void,
  setNextPage: (value: string) => void,
  setPreviousPage: (value: string) => void
) => {
  try {
    const response = await axios.get(pageOfPokemons);
    setPokemonsList(response.data.results);
    setNextPage(response.data.next);
    setPreviousPage(response.data.previous);
  } catch (error) {
    console.log(error);
  }
};

export const searchPokemon = async (pokemon: string, searchedPokemon: {}, setSearchedPokemon: (value: string) => void) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    setSearchedPokemon(response.data)
    console.log(searchedPokemon)

  } catch (error) {
    alert(error)
  }
}

