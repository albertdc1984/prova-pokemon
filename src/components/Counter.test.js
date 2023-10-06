import { render, screen } from "@testing-library/react";
import PokeCounter from "./Counter";

describe("Given a Counter component", () => {
    describe("When it's instantiated", () => {
        test("Then it should render a div element and print 1292 instead of 1300 for lastPokemon prop", () => {
            const pokemon1 = 50;
            const pokemon2 = 1300;
            const total = 300;

            render(
                <PokeCounter
                    firstPokemon={pokemon1}
                    lastPokemon={pokemon2}
                    totalPokemon={total}
                ></PokeCounter>
            );
            const counterElement = screen.getByTestId("counter");

            expect(counterElement).toBeInTheDocument();
            expect(counterElement.innerHTML).toEqual(
                "<p>Showing 50/1292 of 300</p>"
            );
        });
    });
});
