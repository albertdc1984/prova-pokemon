import { render, screen } from "@testing-library/react";
import PokemonDetail from "./PokemonDetail";

describe("Given a PokemonDetail component", () => {
    describe("When it's instantiated", () => {
        test("Then it should render a the element, have a Close button on it and show thhe not found image if there's no scripts.front_default", () => {
            const pokemon = {
                name: "Pikachu",
                id: "20",
                sprites: { front_default: undefined },
            };

            render(<PokemonDetail pokemon={pokemon} />);
            const detailElement = screen.getByTestId("pokedetail");

            expect(detailElement).toBeInTheDocument();
            // eslint-disable-next-line testing-library/no-node-access
            expect(detailElement.lastChild.innerHTML).toEqual("Close");
            // eslint-disable-next-line testing-library/no-node-access
            expect(detailElement.firstChild.src).toEqual(
                `${window.location.origin}/images/knuk.gif`
            );
        });
        test("Then it should render pokemon image if there's scripts.front_default", () => {
            const pokemon = {
                name: "Pikachu",
                id: "20",
                sprites: { front_default: "picture" },
            };

            render(<PokemonDetail pokemon={pokemon} />);
            const detailElement = screen.getByTestId("pokedetail");

            // eslint-disable-next-line testing-library/no-node-access
            expect(detailElement.firstChild.src).toEqual(
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
            );
        });
    });
});
