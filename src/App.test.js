import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

describe("Given an App React component", () => {
    beforeEach(() => {
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockResolvedValue({
                results: [
                    {
                        name: "pikachu",
                        id: "20",
                        sprites: { front_default: "" },
                    },
                    {
                        name: "pikachu",
                        id: "20",
                        sprites: { front_default: "" },
                    },
                    {
                        name: "pikachu",
                        id: "20",
                        sprites: { front_default: "" },
                    },
                    {
                        name: "pikachu",
                        id: "20",
                        sprites: { front_default: "" },
                    },
                    {
                        name: "pikachu",
                        id: "20",
                        sprites: { front_default: "" },
                    },
                    {
                        name: "pikachu",
                        id: "20",
                        sprites: { front_default: "" },
                    },
                ],
            }),
        });
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });
    describe("When it's instantiated", () => {
        test("Then it should render a header & a footer", async () => {
            render(<App></App>);

            const header = screen.getByTestId("header");
            const footer = screen.getByTestId("footer");

            expect(header).toBeVisible();
            expect(footer).toBeVisible();
        });
        test("Then it should render a loader", () => {
            render(<App></App>);
            const loader = screen.getByTestId("loader");

            expect(loader).toBeVisible();
        });
    });
});
