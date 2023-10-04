import "./App.css";

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
            <header className="App-header">PokeList</header>
            <section className="poke-list">
                {provisionalPoke.results.map((pokemon) => (
                    <div key={pokemon.sprites.front_default}>
                        <img
                            src={pokemon.sprites.front_default}
                            alt={`${pokemon.name} front`}
                        />
                        <p>{pokemon.name}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default App;
