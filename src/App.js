import { useEffect, Suspense } from "react"
import {Footer, Nav} from "./export"
import { useLocation } from "react-router-dom"
import {Helmet} from "react-helmet"
import ReactGa from 'react-ga';
import { Clip } from "./components/Loader/Spinner";
import TawkTo from 'tawkto-react'
import { useRoutes } from 'react-router-dom';
import routes from "./routes";


const App = () => {
  const location = useLocation();
  const isLoggedIn = true;
  const routing = useRoutes(routes(isLoggedIn));
  
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

    tawk.onStatusChange((status) => 
    {
        // console.log(status)
  
    })

  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Real Properties Nigeria</title>
        <meta name="description" content="The official website of Real Properties Nigeria Limited. Luxury and Affordable Shortlet" />
        <meta name="keywords" content="Real Properties,  Real Estate, Properties, Real Shortlet, Shortlets, Affordable Shortlet, Shortlets Nigeria" />
        <meta name="author" content="Real Properties Nigeria Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="yH5ZAohsbhjoY2WBqB8T3g92l6mF22PLofwEfcogXp8" />
      </Helmet>
      {location.pathname ==='/admin/live/bookings' || location.pathname ==='/admin/live/bookings/deleted'  || location.pathname ==='/admin/live/bookings/completed' ||  location.pathname ==='/admin/live/bookings/pending' || location.pathname ==='/login' ? null : (<Nav />)}
      <Suspense 
        fallback={<div style={{height: '100vh', position: 'relative', margin: '1rem'}}>
          <Clip type='TailSpin' />
        </div>}>
          {routing}
      </Suspense>
      {location.pathname ==='/admin/live/bookings' || location.pathname ==='/admin/live/bookings/deleted'  || location.pathname ==='/admin/live/bookings/completed' ||  location.pathname ==='/admin/live/bookings/pending' || location.pathname ==='/login' ? null :  (<Footer />)}
  </>
  );
}

export default App;
