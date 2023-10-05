import styled from "styled-components";

const ViewStyledButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    right: 0;
    .svg {
        width: 30px;
        margin: 10px;
        filter: brightness(0) saturate(100%) invert(79%) sepia(87%)
            saturate(2690%) hue-rotate(346deg) brightness(96%) contrast(110%);
    }

    @media (min-width: 320px) and (max-width: 480px) {
        display: none;
    }
`;

export default function ViewButton({ listView, setListView }) {
    return (
        <ViewStyledButton onClick={() => setListView((state) => !state)}>
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
