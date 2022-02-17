import { Error404Icon } from "../Svg/svg"
import Error from "./Error/Error"

const NotFound = () => {
    return (
        <Error title="An unexpected error has occured. Please try again later" Icon={Error404Icon}  error="true"/>
    )
}

export default NotFound
