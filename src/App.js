import { useEffect } from "react"
import Main from "./Pages/Main.jsx"
import Home from "./Pages/Home/Home.jsx"
import { Routes, Route,  } from "react-router-dom"
import {Helmet} from "react-helmet"
import ReactGa from 'react-ga';

const App = () => {

  const invokeGA = () => {
    ReactGa.initialize('UA-181778020-1');
    ReactGa.pageview(window.location.pathname + window.location.search);
  }

  useEffect(() => {
    invokeGA();
  }, []);

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Main />} />
      </Routes>
  </>
  );
}

export default App;
