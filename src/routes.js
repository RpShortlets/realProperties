import {Login, AdminDashboard, NotFound, Home, AdminLogin, SearchResult, PropertyDetails, Payments, OrderSummary, Verify, Transfer, Gallery, MobileReservation, About} from "./export"
import {Navigate} from "react-router-dom";

const routes = (isLoggedIn, Query) => 
    [
        {
            path: '/admin/live',
            element: isLoggedIn ? <AdminDashboard /> : <AdminLogin/>,
            children: [
            { path: 'pending', element: <AdminDashboard /> },
            { path: 'completed', element: <AdminDashboard /> },
            { path: 'deleted', element: <AdminDashboard /> }
            ],
        },
        {
            path: '/login',
            element: <Login />,
            children: [
            { path: 'login', element: <Login /> },
            ],
        },
        {
            path: '/',
            element: <Home />,
            children: [
            { path: '/', element: <Home /> },
            ],
        },
        {
            path: '/s/:location&:adults&:children&:checkIn&:checkOut',
            element: <SearchResult />,
            children: [
            { path: 's/:id', element: <SearchResult /> },
            ],
        },
        {
            path: '/apartment',
            element: <PropertyDetails />,
            children: [
            { path: ':Id&:checkin&:checkout', element: <PropertyDetails /> },
            ],
        },
        {
            path: '/payment',
            element: <Payments />,
            children: [
            { path: 'payment', element: <Payments /> },
            ],
        },
        {
            path: '/order-summary/ref',
            element: <OrderSummary />,
            children: [
            { path: ':id', element: <OrderSummary /> },
            ],
        },
        {
            path: '/order-summary',
            element: <Transfer />,
            children: [
            { path: 'payment', element: <Transfer /> },
            ],
        },
        {
            path: '/paystack/callback',
            element: <Verify />,
            children: [
            { path: 'shortlet', element: <Verify /> },
            ],
        },
        {
            path: '/gallery',
            element: <Gallery />,
        },
        {
            path: '/admin/live/login',
            element: <AdminLogin />,
        },
        {
            path: '/reservation',
            element: Query ? <Navigate to="/" /> : <MobileReservation />,
        },
        {
            path: '/about',
            element: <About />,
        },
        {
            path: '*',
            element: <NotFound />,
            children: [
            { path: '*', element: <NotFound /> },
            ],
        },
    ];

export default routes;