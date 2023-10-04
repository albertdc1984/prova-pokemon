import "./App.css";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";

const provisionalPoke = {
    results: [
        {
            name: "blastoise",
            sprites: {
                front_default:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            },
        },
        {
            name: "blastoise",
            sprites: {
                front_default:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
            },
        },
        {
            name: "blastoise",
            sprites: {
                front_default:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
            },
        },
        {
            name: "blastoise",
            sprites: {
                front_default:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
            },
        },
        {
            name: "blastoise",
            sprites: {
                front_default:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
            },
        },
    ],
};

function App() {
    return (
        <div className="App">
            <Header />
            <section className="poke-list">
                {provisionalPoke.results.map((pokemon) => (
                    <PokemonCard pokemon={pokemon} />
                ))}
            </section>
        </div>
    );
}

export default App;
