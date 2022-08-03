import {Link} from "react-router-dom";
import {getRoute, routeList} from "../../routes/getRoute";

const HomePage = () => {
    console.log(getRoute(routeList.HOME))
    return <Link to={getRoute(routeList.SIGN_IN)}>Sign in</Link>
}

export default HomePage;