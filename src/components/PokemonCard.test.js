import { fireEvent, render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

describe("Given a PokemonCard component", () => {
    describe("When it's instantiated", () => {
        test("Then it should render a div element and print pokemon picture & name", () => {
            const mockSetState = jest.fn();
            const pokemon = {
                name: "pikachu",
                id: "20",
                sprites: { front_default: "" },
            };
            render(
                <PokemonCard pokemon={pokemon} onSelectPokemon={mockSetState} />
            );
            const pokeCard = screen.getByTestId("pokecard");

            fireEvent.click(pokeCard);

            expect(pokeCard).toBeInTheDocument();
            // eslint-disable-next-line testing-library/no-node-access
            expect(pokeCard.firstChild.src).toEqual(
                `${window.location.origin}/images/knuk.gif`
            );
            expect(mockSetState).toHaveBeenCalled();
        });

        test("Then it should render pokemon image if there's scripts.front_default", () => {
            const pokemon = {
                name: "Pikachu",
                id: "20",
                sprites: { front_default: "images/picture.png" },
            };

            render(<PokemonCard pokemon={pokemon} />);
            const pokeCard = screen.getByTestId("pokecard");

            // eslint-disable-next-line testing-library/no-node-access
            expect(pokeCard.firstChild.src).toEqual(
                `${window.location.origin}/images/picture.png`
            );
        });
    });
});
