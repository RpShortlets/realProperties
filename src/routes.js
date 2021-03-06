import {Login, AdminDashboard, NotFound, Home, AdminLogin, SearchResult, PropertyDetails, 
    Payments, OrderSummary, Verify, Transfer, Gallery, MobileReservation, About, CustomerService,
    TermsandPolicy, Policy, ValueAdded, GalleryImages, Agency, AdminHome, ComingPage, ComingPageDetails
} 
    from "./export"
import {Navigate} from "react-router-dom";

const routes = (isLoggedIn, Query,user) => 
    [
        {
            path: '/admin/live',
            element: isLoggedIn ? <AdminDashboard /> : <AdminLogin/>,
            children: [
            { path: 'home', element:  <AdminHome />},
            { path: 'pending', element:  <AdminDashboard /> },
            { path: 'completed', element:   <AdminDashboard /> },
            { path: 'deleted', element: <AdminDashboard />  },
            { path: 'complains', element: <AdminDashboard /> },
            { path: 'update-booking', element: <AdminDashboard /> },
            { path: 'register-user', element: <AdminDashboard /> },
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
            path: '/payment-status',
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
            path: '/gallery/:id',
            element: <GalleryImages />,
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
            path: '/customer-support',
            element: <CustomerService />,
        },
        {
            path: '/policy',
            element: <TermsandPolicy />,
        },
        {
            path: '/terms',
            element: < Policy/>
        },
        {
            path:"/value-added-services",
            element: <ValueAdded />
        },
        {
            path: '*',
            element: <NotFound />,
            children: [
            { path: '*', element: <NotFound /> },
            ],
        },
        {
            path: '/agency',
            element: <Agency />,
        },
        {
            path: '/coming-soon',
            element: <ComingPage />,
        },
        {
            path: '/coming-soon/apartment/:id',
            element: <ComingPageDetails />,
        }
    ];

export default routes;