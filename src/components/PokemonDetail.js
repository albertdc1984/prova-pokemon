import styled from "styled-components";

const StyledPokeDetail = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #295da395;
    padding-top: 5.5rem;

    img {
        width: 35rem;
        border-radius: 10px;
        margin: 10px;

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
