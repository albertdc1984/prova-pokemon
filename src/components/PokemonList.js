import styled from "styled-components";

const PokemonUl = styled.ul`
    padding: 100px 10px 100px 10px;
    display: grid;
    list-style: none;

    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: 1fr;
    }

    @media (min-width: 481px) and (max-width: 780px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 780px) and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1025px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;
export default function PokemonList({ listView, children }) {
    return (
        <PokemonUl
            className={listView ? "list-view" : ""}
            data-testid="pokemonlist"
        >
            {children}
        </PokemonUl>
    );
}
