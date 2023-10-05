import styled from "styled-components";

const StyledFooter = styled.footer`
    margin: 0;
    width: 100vw;
    height: 3.5rem;
    background-color: #295da3;
    font-size: large;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    z-index: 2;
    button {
        padding: 5px;
        margin: 10px;
        font-family: "Press Start 2P", cursive;
        border-radius: 5px;
        border-color: #ff9800;
        background-color: #ffcb05;
        color: #295da3;
        cursor: pointer;
    }
`;

export default function Pagination({
    previousTwenty,
    nextTwenty,
    onPagination,
    setFirstPokemon,
    setLastPokemon,
}) {
    return (
        <StyledFooter>
            {previousTwenty && (
                <button
                    onClick={() => {
                        onPagination(previousTwenty);
                        setFirstPokemon((f) => f - 20);
                        setLastPokemon((l) => l - 20);
                    }}
                >
                    Prev
                </button>
            )}
            {nextTwenty && (
                <button
                    onClick={() => {
                        onPagination(nextTwenty);
                        setFirstPokemon((f) => f + 20);
                        setLastPokemon((l) => l + 20);
                    }}
                >
                    Next
                </button>
            )}
        </StyledFooter>
    );
}