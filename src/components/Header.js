import styled from "styled-components";

const StyledHeader = styled.header`
    margin: 0;
    height: 10vh;
    background-color: #295da3;
    font-size: large;
    padding: 20px;
    position: relative;
    img {
        position: absolute;
        bottom: -25px;
        left: 50%;
        transform: translate(-50%);
    }
`;
export default function Header() {
    return (
        <StyledHeader>
            <img src="images/pokemon.png" alt="Pokemon" />
        </StyledHeader>
    );
}
