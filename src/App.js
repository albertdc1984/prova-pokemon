import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";
import Pagination from "./components/Pagination";
import PokemonList from "./components/PokemonList";
import Loader from "./components/Loader";
import PokeCounter from "./components/Counter";
import ViewButton from "./components/ViewButton";

function App() {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);
    const [previousTwenty, setPreviousTwenty] = useState(null);
    const [nextTwenty, setNextTwenty] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [totalPokemon, setTotalPokemon] = useState("0");
    const [lastPokemon, setLastPokemon] = useState(20);
    const [firstPokemon, setFirstPokemon] = useState(lastPokemon - 20);
    const [listView, setListView] = useState(false);

    const handleUnselectPokemon = () => {
        setSelectedPokemon(null);
    };

    const handleSetView = () => {
        setListView(!listView);
    };

    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

    useEffect(() => {
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
        pokemonFetch(url);
        console.log(pokemonList);
    }, [url]);

    return (
        <div className="App">
            <Header>
                <ViewButton listView={listView} onSetView={handleSetView} />
            </Header>

            {isLoading ? (
                <Loader />
            ) : (
                <PokemonList listView={listView}>
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
            <Pagination>
                {previousTwenty && (
                    <button
                        onClick={() => {
                            setUrl(previousTwenty);
                            setFirstPokemon((f) => f - 20);
                            setLastPokemon((l) => l - 20);
                        }}
                        disabled={isLoading}
                    >
                        Prev
                    </button>
                )}
                {nextTwenty && (
                    <button
                        onClick={() => {
                            setUrl(nextTwenty);
                            setFirstPokemon((f) => f + 20);
                            setLastPokemon((l) => l + 20);
                        }}
                        disabled={isLoading}
                    >
                        Next
                    </button>
                )}
            </Pagination>
        </div>
    );
}

export default App;
