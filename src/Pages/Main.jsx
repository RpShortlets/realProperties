import Card from "../components/Card/Card"
import "../styles/main.css"
import {Helmet} from "react-helmet"

const Main = () => {
    return (
        <div className="main">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Real Properties Reservation</title>
                <meta name="description" content="Make Reservations for our shortlet" />
                <meta name="keywords" content="Real Properties,  Real Estate, Properties, Real Shortlet, Shortlets, Affordable Shortlet, Shortlets Nigeria" />
                <meta name="author" content="Real Properties Nigeria Limited" />
            </Helmet>
            <div className="main-overlay">
                <Card />
            </div>
        </div>
    )
}

export default Main
