import styled from "styled-components";

const StyledFooter = styled.footer`
    margin: 0;
    height: 3.5rem;
    background-color: #295da3;
    font-size: large;
    position: relative;
    display: flex;
    justify-content: center;
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

export default function Pagination({
    previousTwenty,
    nextTwenty,
    onPagination,
}) {
    return (
        <StyledFooter>
            <button onClick={() => onPagination(previousTwenty)}>Prev</button>
            <button onClick={() => onPagination(nextTwenty)}>Next</button>
        </StyledFooter>
    );
}
