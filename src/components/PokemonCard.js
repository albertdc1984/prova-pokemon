import styled from "styled-components";

const PokeCardContainer = styled.li`
    background-color: #ffcb05;
    border-radius: 10px;
    height: 90px;
    margin: 5px 5px 0 5px;
    border: solid 5px #ff980078;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #ff980078;
    }
    p {
        text-transform: uppercase;
    }
    img {
        height: 90%;
        border-radius: 5px;
        margin: 5px;
    }
`;

export default function PokemonCard({ pokemon, onSelectPokemon }) {
    return (
        <PokeCardContainer
            onClick={() => onSelectPokemon(pokemon)}
            key={pokemon.name}
        >
            <img
                src={
                    pokemon.sprites.front_default
                        ? pokemon.sprites.front_default
                        : "images/knuk.gif"
                }
                alt={`${pokemon.name} front`}
                key={pokemon.name}
            />
            <p>{pokemon.name}</p>
        </PokeCardContainer>
    );
}
