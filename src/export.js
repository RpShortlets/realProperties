import { lazy } from "react"

export const Home = lazy(() => import("./Pages/Home/Home"));
export const SearchResult = lazy(() => import('./Pages/SearchResult/SearchResult'))
export const PropertyDetails = lazy(() => import('./Pages/PropertyDetails/PropertyDetails'))
export const Payments = lazy(() => import('./Pages/payments/Payments') )
export const Reservation = lazy(() => import('./Pages/payments/ReservationRight.jsx') )
export const OrderSummary = lazy(() => import('./Pages/payments/OrderSummary'))
export const Verify = lazy(() => import('./Pages/payments/Verify.jsx'))
export const Transfer = lazy(() => import('./Pages/payments/transfer.jsx'))
export const AdminDashboard = lazy(() => import('./Pages/dashboard/Admin'))
export const AdminLogin = lazy(() => import('./Pages/dashboard/components/Login'))
export const Login = lazy(() => import('./auth/Login'))
export const Gallery = lazy(() => import('./Pages/Gallery/Gallery'))
export const GalleryImages = lazy(() => import('./Pages/Gallery/GalleryImages'))
export const MobileReservation = lazy(() => import('./Pages/payments/MobileReservation'))
export const About = lazy(() => import('./Pages/About/About'))
export const CustomerService = lazy(() => import('./Pages/Customer Support/CustomerSupport'))
export const Policy = lazy(() => import('./Pages/Term and Policy/Policy'))
export const TermsandPolicy = lazy(() => import('./Pages/Term and Policy/TermandPolicy.jsx'))
export const ValueAdded = lazy(() => import('./Pages/Vas/ValueAdded'))
export const Agency = lazy(() => import('./Pages/Agency/Agency'))
export const AdminHome = lazy(() => import('./Pages/dashboard/components/AdminHome'))

export { default as Footer } from "./components/Footer/Footer"
export { default as NotFound } from "./components/NotFound"
export { default as Nav } from "./components/Nav/Nav"