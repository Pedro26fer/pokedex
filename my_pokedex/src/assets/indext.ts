import axios from "axios";
import { AllDetails } from "@/pages/pokemons/[name]";

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

export const moreDetaislOfPokemon = async (
  pokemonName: string,
  setImageOfPokemon: (value: string) => void,
  setAllDtails: (value: AllDetails) => void,
  setTypes: (value: []) => void,
  setSkills: (value: []) => void
) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    );
    console.log(response.data);
    setImageOfPokemon(response.data.sprites.other.home.front_default);
    setAllDtails(response.data)
    setSkills(response.data.abilities)
    setTypes(response.data.types)
  } catch (error) {
    alert(error);
  }
};

interface ImagePokemon {
  url: string;
  setUrlImage: (value: string) => void;
}

export const imageUrl = async ({ url, setUrlImage }: ImagePokemon) => {
  try {
    const response = await axios.get(url);
    setUrlImage(response.data.sprites.front_default);
  } catch (error) {
    console.log(error);
  }
};
