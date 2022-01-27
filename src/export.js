import { lazy } from "react"

export const Home = lazy(() => import("./Pages/Home/Home"));
export const SearchResult = lazy(() => import('./Pages/SearchResult/SearchResult'))
export const PropertyDetails = lazy(() => import('./Pages/PropertyDetails/PropertyDetails'))
export const Payments = lazy(() => import('./Pages/payments/Payments') )
export const Reservation = lazy(() => import('./Pages/payments/ReservationRight.jsx') )
export const OrderSummary = lazy(() => import('./Pages/payments/OrderSummary'))
export const Verify = lazy(() => import('./Pages/payments/Verify.jsx'))

export { default as Footer } from "./components/Footer/Footer"
export { default as NotFound } from "./components/NotFound"
export { default as Nav } from "./components/Nav/Nav"