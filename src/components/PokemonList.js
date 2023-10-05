import styled from "styled-components";

const PokemonUl = styled.ul`
    padding: 100px 10px 100px 10px;
`;
export default function PokemonList({ children }) {
    return <PokemonUl>{children}</PokemonUl>;
}
