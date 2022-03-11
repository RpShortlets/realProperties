import { useEffect, Suspense } from "react"
import {Footer, Nav} from "./export"
import { useLocation } from "react-router-dom"
import {Helmet} from "react-helmet"
import { useDispatch } from 'react-redux'
import ReactGa from 'react-ga';
import { Clip } from "./components/Loader/Spinner";
import TawkTo from 'tawkto-react'
import { useRoutes } from 'react-router-dom';
import routes from "./routes";
import useMediaQuery from "./hooks/useMediaQuery/useMediaQuery";
import ScrollToTop from "./scrollTop"
import { ParallaxProvider } from 'react-scroll-parallax';
import { CheckToken } from './hooks/useCheckToken/useCheckToken';
import { setPaystackRequest } from "./redux/actions/componentState"


const App = () => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('admin'))
  const location = useLocation();
  const isLoggedIn = user ? true : false;
  const Query = useMediaQuery("(min-width: 769px)")
  const routing = useRoutes(routes(isLoggedIn, Query));
  CheckToken()
  
  const invokeGA = () => {
    ReactGa.initialize('UA-181778020-1');
    ReactGa.pageview(window.location.pathname + window.location.search);
  }

  useEffect(() => {
    invokeGA();
  }, []);

  // useEffect(() => {
  //   dispatch(UpdateBooks())
  // }, [dispatch])

  useEffect(() => {
    const tawkId = '1fpjikfdf'
    const propertyId = '61e52988b84f7301d32b5faf'
    const tawk = new TawkTo(propertyId, tawkId)

    tawk.onStatusChange((status) => {})
  }, [])

  useEffect(() => { 
    if (location.pathname === "/" || '/reservation') {
      dispatch(setPaystackRequest(false))
    }
  }, [location, dispatch])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Real Property Assets And Technologies Limited</title>
        <meta name="description" content="The official website of Real Property Assets And Technologies Limited. Luxury and Affordable Shortlet, Lagos, Nigeria" />
        <meta name="author" content="Real Property Assets And Technologies Limited" />
        <meta content= "Short term Let, Aparthotel, Short term house rentals, Furnished Shortlets rentals, Affordable homes, Luxury, Secure Transaction, Rentals, Home away from home, House, Flats, Housing Rentals, Vacation rental property, Vacation homes, Housing, Suites, Lodging, Daily Rental Accommodation, Luxury Vacation rentals, Luxury property management, Property Management, Top Quality Homes, Luxury and Ultra luxury homes, Reserve/ Reservation, Reserve your apartment for your short stay, Luxury vacation homes, Trusted brands, Contemporary homes, Extraordinary homes, 2 bedrooms apartments, Modern Luxury Apartments, 1 bedroom apartment, Serene Environment, Rental Agents, Vacation rental property manager, Short let Consultant, Accommodation websites, Staycation, Romantic Weekend, Short lets in Lekki, Short lets in Ikoyi, Ocean View Apartments, Mini vacation homes, Car Hire Services, Drop off and Pick up, Real Property, Real Estate, Short lets homes, Short stay, Short term rentals, Luxury car rentals, Vacation rental organization, Best vacation rental management companies, Midak Mews, Short lets in Lagos, Lagos Short lets, Studio Apartments, Urban Luxury Apartments, Penthouses in Lagos, Reliable Short let platform, Luxury homes, Luxe, Real estate services, Affordable Short lets, Cosy Apartment, Apartments in Lagos, Fully Serviced apartment, Vacation destination, Comfortable houses, Experience Curator, Short let Apartments in Lagos, Apartment house, Short lets Flat, Holiday homes, Holiday Apartment Rentals, 24 hours power supply apartments in Lagos, Short lets in Nigeria, Accommodation in Serene Environment, Shortlets Available in Lagos, Serviced Apartment with a pool and Gym" name="keywords" class="next-head" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="yH5ZAohsbhjoY2WBqB8T3g92l6mF22PLofwEfcogXp8" />
      </Helmet>
      {location.pathname ==='/admin/live' || location.pathname ==='/admin/live/complains' ||  location.pathname ==='/admin/live/update-booking' || location.pathname ==='/admin/live/deleted'  || location.pathname ==='/admin/live/completed' ||  location.pathname ==='/admin/live/pending' || location.pathname ==='/login' ? null : (<Nav />)}
      <Suspense 
        fallback={<div style={{height: '100vh', position: 'relative', margin: '1rem'}}>
          <Clip type='TailSpin' />
        </div>}>
          <ScrollToTop>
            <ParallaxProvider>
              {routing}
            </ParallaxProvider>
          </ScrollToTop>
      </Suspense>
      {location.pathname ==='/admin/live' ||  location.pathname ==='/admin/live/complains' ||  location.pathname ==='/admin/live/update-booking' || location.pathname ==='/admin/live/deleted'  || location.pathname ==='/admin/live/completed' ||  location.pathname ==='/admin/live/pending' || location.pathname ==='/login' ? null :  (<Footer />)}
  </>
  );
}

export default App;
