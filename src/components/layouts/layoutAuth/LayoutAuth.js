import {Container} from "@mui/material";
import './layoutAuth.css';
import HeaderAuth from "../headerAuth/HeaderAuth";

const LayoutAuth = (props) => {
    return <>
        <HeaderAuth />
        <main id={'main-auth'}>
            {props.children}
        </main>

    </>
}

export default LayoutAuth;