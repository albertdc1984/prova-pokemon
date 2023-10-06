import styled from "styled-components";

const StyledPokeDetail = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgb(255, 255, 255);
    background: rgb(255, 213, 0);
    background: radial-gradient(
        circle,
        rgba(255, 213, 0, 1) 1%,
        rgba(255, 255, 255, 1) 24%,
        rgba(0, 117, 255, 1) 26%,
        rgba(255, 196, 0, 1) 28%,
        rgba(0, 76, 187, 1) 32%,
        rgba(4, 140, 207, 1) 47%,
        rgba(0, 168, 255, 1) 57%,
        rgba(0, 106, 196, 1) 64%,
        rgba(255, 255, 255, 1) 68%,
        rgba(255, 213, 0, 1) 92%,
        rgba(255, 213, 0, 1) 100%
    );
    padding-top: 5.5rem;
    z-index: 2;

    img {
        width: 30rem;
        border-radius: 10px;
        margin: 10px;
        filter: drop-shadow(-5px 7px 5px rgba(0, 0, 0, 0.3));

        @media screen and (max-width: 600px) {
            width: 80%;
        }
    }
    p {
        text-transform: uppercase;
        font-size: 1rem;
        color: #ff9800;
        margin: 10px;
    }
    button {
        padding: 5px;
        margin: 10px;
        font-family: "Press Start 2P", cursive;
        border-radius: 5px;
        border-color: #ff9800;
        background-color: #ffcb05;
        color: #295da3;
        cursor: pointer;
    }
`;

export default function PokemonDetail({ pokemon, onUnselectPokemon }) {
    return (
        <StyledPokeDetail data-testid="pokedetail">
            <img
                src={
                    pokemon.sprites.front_default
                        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
                        : "images/knuk.gif"
                }
                alt={`${pokemon.name} front`}
            />
            <p>{pokemon.name}</p>
            <button onClick={onUnselectPokemon}>Close</button>
        </StyledPokeDetail>
    );
}
