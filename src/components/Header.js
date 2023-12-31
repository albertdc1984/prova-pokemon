import styled from "styled-components";

const StyledHeader = styled.header`
    margin: 0;
    height: 3.5rem;
    background-color: #295da3;
    font-size: large;
    position: fixed;
    top: 0;
    z-index: 3;
    box-shadow: 0px 7px 5px -1px rgba(0, 0, 0, 0.3);
    .title-container {
        width: 100vw;
        position: relative;
        img {
            position: absolute;
            bottom: -90px;
            left: 50%;
            transform: translate(-50%);
            filter: drop-shadow(-5px 7px 5px rgba(0, 0, 0, 0.3));
        }
    }
`;

export default function Header({ children }) {
    return (
        <StyledHeader data-testid="header">
            <div className="title-container">
                <img src="images/pokemon.png" alt="Pokemon" />
            </div>
            {children}
        </StyledHeader>
    );
}
