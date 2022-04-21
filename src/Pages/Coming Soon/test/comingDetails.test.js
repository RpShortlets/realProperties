import { render, screen } from '@testing-library/react';
import {Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from "../../../redux/store"
import ComingDetails from '../ComingDetails';


test("Should be in the document", () => {
    render(
        
            <Provider store={store}>
                <ComingDetails />
            </Provider>
        
    );

    const Coming = screen.getByTestId("comingDetails")
    expect(Coming).not.toBeInTheDocument()
})


test("Should be in the document-true", () => {
    render(
        
        <Provider store={store}>
            <ComingDetails />
        </Provider>
        

    );

    const Coming = screen.getByTestId("comingDetails")
    expect(Coming).toBeInTheDocument()
})


test("Header must be in doc", () => {
    render(
        
        <Provider store={store}>
            <ComingDetails />
        </Provider>
    

    );

    const Header = screen.getByTestId("comingDetailsHeader")
    expect(Header).toBeInTheDocument()
})


test("Header must be Executive test", () => {
    render(
        
        <Provider store={store}>
            <ComingDetails />
        </Provider>
        

    );
    const test = "Executive Suite"

    const Header = screen.getByTestId("comingDetailsHeader")
    expect(Header.textContent).toBe(test)
})

test("Price must be in the document", () => {
    render(
        
        <Provider store={store}>
            <ComingDetails />
        </Provider>
        

    );

    const Price = screen.getByTitle("price")
    expect(Price).toBeInTheDocument()
})

test("Icons must be in the document", () => {
    render(
        
        <Provider store={store}>
            <ComingDetails />
        </Provider>
        

    );

    const Icons = screen.getAllByTestId("iconCard")
    expect(Icons.length).toBe(3)
})