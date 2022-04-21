import { render, screen } from '@testing-library/react';
import Login from '../../dashboard/components/Login';
import { Provider } from 'react-redux'
import {store} from "../../../redux/store"

test("Section should be render at first load", () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    );
    const modal = screen.getByTestId('loginDiv');
    expect(modal).toBeInTheDocument();
})

test("Input should contain email field", () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    )

    const EmailInput = screen.getByPlaceholderText(/Email/i);
    expect(EmailInput).toBeInTheDocument()
})

test("Input value should be empty", () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    )

    const EmailInput = screen.getByPlaceholderText(/Email/i);
    expect(EmailInput.value).toBe("")
})

test("Input should contain password field", () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    )

    const PasswordInput = screen.getByPlaceholderText(/password/i);
    expect(PasswordInput).toBeInTheDocument()
})


test("Input password fiedl should empty", () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    )

    const PasswordInput = screen.getByPlaceholderText(/password/i);
    expect(PasswordInput.value).toBe("")
})

test("Button should be rendered", () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    )

    const Button = screen.getByRole("button");
    expect(Button).toBeInTheDocument();
})

test("Button should have Login as content", () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    )

    const Button = screen.getByRole("button");
    expect(Button.textContent).toBe("Login");
})

test("Button should have be disabled", () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    )

    const Button = screen.getByRole("button");
    expect(Button.disabled).toBe(true);
})