import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";
import Pagination from "./components/Pagination";
import PokemonList from "./components/PokemonList";
import Loader from "./components/Loader";
import PokeCounter from "./components/Counter";

function App() {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);
    const [previousTwenty, setPreviousTwenty] = useState(null);
    const [nextTwenty, setNextTwenty] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [totalPokemon, setTotalPokemon] = useState("0");
    const [lastPokemon, setLastPokemon] = useState(20);
    const [firstPokemon, setFirstPokemon] = useState(lastPokemon - 20);

    const handleUnselectPokemon = () => {
        setSelectedPokemon(null);
    };

    const pokemonFetch = async (url) => {
        setIsLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        const next = data.next;
        const previous = data.previous;
        const results = data.results;
        setTotalPokemon(data.count);

        const pokePromises = results.map(async ({ url }) => {
            const pokemonData = await fetch(url);
            const pokemon = await pokemonData.json();
            return pokemon;
        });
        setPokemonList(await Promise.all(pokePromises));
        setPreviousTwenty(previous);
        setNextTwenty(next);
        setIsLoading(false);
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

            {isLoading ? (
                <Loader />
            ) : (
                <PokemonList>
                    {pokemonList.map((pokemon) => (
                        <li key={pokemon.name}>
                            <PokemonCard
                                pokemon={pokemon}
                                onSelectPokemon={setSelectedPokemon}
                            />
                        </li>
                    ))}
                </PokemonList>
            )}
            {selectedPokemon && (
                <PokemonDetail
                    pokemon={selectedPokemon}
                    onUnselectPokemon={handleUnselectPokemon}
                />
            )}
            <PokeCounter
                firstPokemon={firstPokemon}
                lastPokemon={lastPokemon}
                totalPokemon={totalPokemon}
            />
            <Pagination
                onPagination={pokemonFetch}
                previousTwenty={previousTwenty}
                nextTwenty={nextTwenty}
                setLastPokemon={setLastPokemon}
                setFirstPokemon={setFirstPokemon}
            />
        </div>
    );
}

export default App;
