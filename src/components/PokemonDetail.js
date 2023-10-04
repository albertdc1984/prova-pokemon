import styled from "styled-components";

const StyledPokeDetail = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 50vw;
    background-color: #295da395;
    top: 60%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: solid 10px #ff9800;
    border-radius: 10px;
    img {
        width: 80%;
    }
    p {
        text-transform: uppercase;
        font-size: 2rem;
        color: #ff9800;
    }
`;

export default function PokemonDetail({ pokemon, onUnselectPokemon }) {
    return (
        <StyledPokeDetail>
            <img
                src={pokemon.sprites.front_default}
                alt={`${pokemon.name} front`}
            />
            <p>{pokemon.name}</p>
            <button onClick={onUnselectPokemon}>Close</button>
        </StyledPokeDetail>
    );
}
