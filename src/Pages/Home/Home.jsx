import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router"
import Button from "../../components/Button"
import "../../styles/home.css"
import Items from "./components/Items";



const Home = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClick = () => {
        navigate("/reservation")
    }

    return (
        <section>
            <div style={{display: 'flex', width: '100%', height: '100vh'}}>
                <div style={{flex: '2', width: '100%', height: '100%'}}>
                    <div className="Home-background">
                        <div  className="Home-overlay">
                            <div className="Home-content-wrapper Home-hide">
                                <h1>Our Shortlet's Outstanding Traits</h1>
                                <Button text="Make Reservation"  className="Home-btn" onClicks={handleClick} styles="Home-mobile-btn"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Home-content-header">
                    <div className="Home-content">
                        <div className="Home-content-wrapper">
                            <h1>Our Shortlet's Outstanding Traits</h1>
                            <Button text="Make Reservation"  className="Home-btn" onClicks={handleClick}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Home-features">
                <div className="Home-features-content">
                    <h2>A4 Apartment Features</h2>
                    <Items show={show}/>
                </div>
                <Link to="#" onClick={() => setShow(!show)} style={{textDecoration: 'none'}}>
                    <p style={{marginTop: '40px', textAlign: 'left'}}>{show ? 'Show Less' : 'Show More'}</p>
                </Link>
            </div>
        </section>
    )
}

export default Home
