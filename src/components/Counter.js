import styled from "styled-components";

const StyledCounter = styled.div`
    position: fixed;
    bottom: 3.5rem;
    width: 100vw;
    background-color: white;
    padding: 5px;
    p {
        font-size: 0.7rem;
        text-align: end;
        margin-right: 15px;
    }
`;
export default function PokeCounter({
    firstPokemon,
    lastPokemon,
    totalPokemon,
}) {
    return (
        <StyledCounter>
            <p>
                Showing {firstPokemon}/
                {lastPokemon == 1300 ? 1292 : lastPokemon} of {totalPokemon}
            </p>
        </StyledCounter>
    );
}
