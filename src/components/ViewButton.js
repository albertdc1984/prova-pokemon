import styled from "styled-components";

const ViewStyledButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    right: 0;
    .svg {
        width: 30px;
        margin: 14px;
        filter: brightness(0) saturate(100%) invert(79%) sepia(87%)
            saturate(2690%) hue-rotate(346deg) brightness(96%) contrast(110%);
    }

    @media (min-width: 0px) and (max-width: 480px) {
        display: none;
    }
`;

export default function ViewButton({ listView, onSetView }) {
    return (
        <ViewStyledButton onClick={onSetView} data-testid="viewbutton">
            <img
                src={
                    listView
                        ? "images/border-all-solid.svg"
                        : "images/list-solid.svg"
                }
                alt="setViewState"
                className="svg"
            />
        </ViewStyledButton>
    );
}
