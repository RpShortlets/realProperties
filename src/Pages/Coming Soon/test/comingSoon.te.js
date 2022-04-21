import { render, screen } from '@testing-library/react';
import {Router} from 'react-router-dom'
import ComingSoon from '../ComingResult';
import { Provider } from 'react-redux'
import {store} from "../../../redux/store"


test("Must display modal", () => {
    render(
        <Router>
            <Provider store={store}>
                <ComingSoon />
            </Provider>
        </Router>

    );

    const ComingPage = screen.getByTestId('comingId')
    expect(ComingPage).toBeInTheDocument()
}) 

test("Must have an header", () => {
    render(
        <Router>
            <Provider store={store}>
                <ComingSoon />
            </Provider>
        </Router>
    );


    const H1 = screen.getByTestId("comingHeader")
    expect(H1).toBeInTheDocument()
})

test("header must have a value Up Coming Apartments", () => {
    render(
        <Router>
            <Provider store={store}>
                <ComingSoon />
            </Provider>
        </Router>
    )


    const H1 = screen.getByTestId("comingHeader")
    expect(H1.textContent).toBe("Up Coming Apartments")
})