import {AppBar, Container, Toolbar} from "@mui/material";
import logo from '../../../assets/images/logo.png';
import './headerAuth.css';
const HeaderAuth = () => {
    return <AppBar className={'header-auth'} position={'relative'}>
        <Container>
            <Toolbar>
                <img src={logo} alt=""/>
            </Toolbar>
        </Container>
    </AppBar>
}

export default HeaderAuth;