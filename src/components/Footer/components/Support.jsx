import { NavLink } from "react-router-dom"

const Support = () => {
    return (
        <div>
            <div>
                <h3>Support</h3>
                <div>
                    <div>
                        <NavLink to="/">
                            Contact Customer Support
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/">
                            Cancellation options
                        </NavLink>
                    </div>
                    {/* <div>
                        <NavLink to="/">
                            List a Property
                        </NavLink>
                    </div> */}
                    {/* <div>
                        <NavLink to="/">
                            Hire an Experience Curator
                        </NavLink>
                    </div> */}
                    {/* <div>
                        <NavLink to="/">
                            Take a Virtual Tour of a Property
                        </NavLink>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Support
