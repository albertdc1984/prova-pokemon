import styled from "styled-components";

const StyledLoader = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100px;
    }
`;

export default function Loader() {
    return (
        <StyledLoader data-testid="loader">
            <div>
                <img src="images/4tym.gif" alt="Pokemon" />
                <p>LOADING...</p>
            </div>
        </StyledLoader>
    );
}
