import { render, screen } from "@testing-library/react";
import PokemonList from "./PokemonList";

describe("Given a PokemonList component", () => {
    describe("When it's instantiated", () => {
        test("Then it should render a ul element and print children props", () => {
            render(
                <PokemonList listView={true}>
                    <li></li>
                    <li></li>
                    <li></li>
                </PokemonList>
            );
            const pokeUl = screen.getByTestId("pokemonlist");

            expect(pokeUl).toBeInTheDocument();
            expect(pokeUl.innerHTML).toEqual("<li></li><li></li><li></li>");
        });
    });
});
