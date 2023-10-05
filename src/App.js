import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";
import Pagination from "./components/Pagination";
import PokemonList from "./components/PokemonList";

function App() {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);
    const [previousTwenty, setPreviousTwenty] = useState(null);
    const [nextTwenty, setNextTwenty] = useState(null);

    const handleUnselectPokemon = () => {
        setSelectedPokemon(null);
    };

    const pokemonFetch = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        const next = data.next;
        const previous = data.previous;
        const results = data.results;

        const pokePromises = results.map(async ({ url }) => {
            const pokemonData = await fetch(url);
            const pokemon = await pokemonData.json();
            return pokemon;
        });
        setPokemonList(await Promise.all(pokePromises));
        setPreviousTwenty(previous);
        setNextTwenty(next);
    };

    useEffect(
        () => async () => {
            await pokemonFetch("https://pokeapi.co/api/v2/pokemon");
        },
        []
    );

    return (
        <div className="App">
            <Header />
            <PokemonList>
                {pokemonList.map((pokemon) => (
                    <PokemonCard
                        pokemon={pokemon}
                        onSelectPokemon={setSelectedPokemon}
                    />
                ))}
            </PokemonList>
            {selectedPokemon && (
                <PokemonDetail
                    pokemon={selectedPokemon}
                    onUnselectPokemon={handleUnselectPokemon}
                />
            )}
            <Pagination
                onPagination={pokemonFetch}
                previousTwenty={previousTwenty}
                nextTwenty={nextTwenty}
            />
        </div>
    );
}

export default App;
