import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { Provider } from 'react-redux'
import {store} from "../../../redux/store"


test("must show modal after 3 sec", () => {
    render(
        <Provider store={store}>
            <Home />
        </Provider>
    );
    const modal = screen.getByTestId('promoModal');
    expect(modal).not.toBeInTheDocument();
})