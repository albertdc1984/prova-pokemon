import styled from "styled-components";

const PokeCardContainer = styled.div`
    background-color: #ffcb05;
    border-radius: 10px;
    height: 150px;
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
`;
export default function PokemonCard({ pokemon }) {
    return (
        <PokeCardContainer>
            <img
                src={pokemon.sprites.front_default}
                alt={`${pokemon.name} front`}
            />
            <p>{pokemon.name}</p>
        </PokeCardContainer>
    );
}