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
    background: linear-gradient(
        254deg,
        rgba(255, 255, 255, 1) 1%,
        rgba(255, 255, 255, 1) 24%,
        rgba(0, 117, 255, 1) 26%,
        rgba(255, 255, 255, 1) 28%,
        rgba(0, 76, 187, 1) 32%,
        rgba(4, 140, 207, 1) 47%,
        rgba(0, 168, 255, 1) 57%,
        rgba(255, 255, 255, 1) 63%,
        rgba(0, 106, 196, 1) 64%,
        rgba(255, 255, 255, 1) 68%
    );
    padding-top: 5.5rem;

    img {
        width: 35rem;
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
    }
`;

export default function PokemonDetail({ pokemon, onUnselectPokemon }) {
    return (
        <StyledPokeDetail>
            <img
                src={
                    pokemon.sprites.front_default
                        ? pokemon.sprites.front_default
                        : "images/knuk.gif"
                }
                alt={`${pokemon.name} front`}
            />
            <p>{pokemon.name}</p>
            <button onClick={onUnselectPokemon}>Close</button>
        </StyledPokeDetail>
    );
}
