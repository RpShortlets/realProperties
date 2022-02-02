import { Navigate, Outlet } from 'react-router-dom';
import {Login, AdminDashboard, NotFound, Home, SearchResult, PropertyDetails, Payments, OrderSummary, Verify, Transfer} from "./export"

const routes = (isLoggedIn) => 
    [
        {
            path: '/admin/live/bookings',
            element: isLoggedIn ? <AdminDashboard /> : <Navigate to="/login" />,
            children: [
            { path: 'dashboard', element: <AdminDashboard /> },
            { path: 'pending', element: <AdminDashboard /> },
            { path: 'completed', element: <AdminDashboard /> },
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
            { path: ':Id&:checkIn&:checkOut', element: <PropertyDetails /> },
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
            path: '*',
            element: <NotFound />,
            children: [
            { path: '*', element: <NotFound /> },
            ],
        },
    ];

export default routes;