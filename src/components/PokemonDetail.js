import styled from "styled-components";

const StyledPokeDetail = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 50vw;
    background-color: #295da395;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    border: solid 10px #ff9800;
    border-radius: 10px;
    img {
        width: 80%;
        border-radius: 10px;
        margin: 10px;
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
