import styled from "styled-components";

const StyledCounter = styled.div`
    position: fixed;
    bottom: 3.5rem;
    width: 100vw;
    background-color: white;
    padding: 5px;
    box-shadow: 0px -7px 5px -1px rgba(0, 0, 0, 0.3);
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
                {lastPokemon === 1300 ? 1292 : lastPokemon} of {totalPokemon}
            </p>
        </StyledCounter>
    );
}
