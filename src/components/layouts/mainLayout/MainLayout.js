import Sidebar from "../sidebar/Sidebar";
import {useSelector} from "react-redux";
import '../mainLayout/mainLayout.css'
import {Container} from "@mui/material";
import Header from "../header/Header";

const MainLayout = () => {
    const sidebarState = useSelector(state => state.sidebar);
    return <>
        <Sidebar/>
        <main id={"main-content"} style={{marginLeft: sidebarState.visible ? sidebarState.width : '0'}}>
            <Header/>
            <div style={{padding: '20px'}}>
                <Container maxWidth={false} className={'container'}>
                    abc
                </Container>
            </div>
        </main>
    </>
}

export default MainLayout;