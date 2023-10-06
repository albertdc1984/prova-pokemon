import { fireEvent, render, screen } from "@testing-library/react";
import ViewButton from "./ViewButton";
import React from "react";

jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: jest.fn(),
}));

describe("Given a ViewButton component", () => {
    describe("When it's instantiated with listView = true", () => {
        test("Then it should render a button element showing grid icon", () => {
            const mockSetState = jest.fn();
            let listView = true;

            render(<ViewButton listView={listView} onSetView={mockSetState} />);
            const viewbutton = screen.getByTestId("viewbutton");

            expect(viewbutton).toBeInTheDocument();
            // eslint-disable-next-line testing-library/no-node-access
            expect(viewbutton.firstChild.src).toEqual(
                `${window.location.origin}/images/border-all-solid.svg`
            );

            fireEvent.click(viewbutton);

            expect(mockSetState).toHaveBeenCalled();
        });
    });
    describe("When it's instantiated with listView = false", () => {
        test("Then it should render a button element showing grid icon", () => {
            const mockState = false;
            const mockSetState = jest.fn();

            React.useState.mockReturnValue([mockState, mockSetState]);

            render(<ViewButton onSetView={mockSetState} />);
            const viewbutton = screen.getByTestId("viewbutton");
            fireEvent.click(viewbutton);

            // eslint-disable-next-line testing-library/no-node-access
            expect(viewbutton.firstChild.src).toEqual(
                `${window.location.origin}/images/list-solid.svg`
            );
            expect(mockSetState).toHaveBeenCalled();
        });
    });
});
