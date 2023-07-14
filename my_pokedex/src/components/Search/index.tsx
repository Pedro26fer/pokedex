export interface Pokemon {
  pokemon: string;
  setPokemon: (value: string) => void;
}

export const SearchBar = ({ pokemon, setPokemon }: Pokemon) => {
  
  return (
    <div className={`flex flex-col items-center gap-2`}>
      <label className={`text-xl font-black font-serif text-white`}>
        Capture seu pokemon 
      </label>
      <input
        className={`p-1 w-96 rounded-sm border-2 border-blue-500 focus:border-blue-800 focus:outline-none`}
        type="text"
        onChange={(e) => setPokemon(e.target.value)}
      />
    </div>
  );
};
