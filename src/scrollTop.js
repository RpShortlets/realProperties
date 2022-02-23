import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
    const location = useLocation();
    const newUrl = location.pathname.includes('apartment')

    useEffect(() => {
        if(newUrl) {
            return;
        } else {
            window.scrollTo(0, 0);
        }
    }, [location, newUrl]);

    return <>{props.children}</>
};

export default ScrollToTop;