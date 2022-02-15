import { NavLink } from "react-router-dom"

const Companies = () => {
    return (
        <div>
            <div>
                <h3>Company</h3>
                <div>
                    <div>
                        <NavLink to="/">
                            About Us
                        </NavLink>
                    </div>
                    {/* <div>
                        <NavLink to="/">
                            How its works
                        </NavLink>
                    </div> */}
                    {/* <div>
                        <NavLink to="/">
                            Purchase a Trip
                        </NavLink>
                    </div> */}
                    <div>
                        <NavLink to="/gallery">
                            Gallery
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/">
                            About our Value Added Service
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/">
                            Terms and Condition
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
