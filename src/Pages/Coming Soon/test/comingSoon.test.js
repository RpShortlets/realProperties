import { render, screen } from '@testing-library/react';
import ComingSoon from '../ComingResult';
import { Provider } from 'react-redux'
import {store} from "../../../redux/store"


test("Must display modal", () => {
    render(
        <Provider store={store}>
            <ComingSoon />
        </Provider>
    );

    const ComingPage = screen.getByTestId('comingId')
    expect(ComingPage).toBeInTheDocument()
}) 

test("Must have an header", () => {
    render(
        <Provider store={store}>
            <ComingSoon />
        </Provider>
    );


    const H1 = screen.getByTestId("comingHeader")
    expect(H1).toBeInTheDocument()
})

test("header must have a value Up Coming Apartments", () => {
    render(
        <Provider store={store}>
            <ComingSoon />
        </Provider>
    )


    const H1 = screen.getByTestId("comingHeader")
    expect(H1.textContent).toBe("Up Coming Apartments")
})