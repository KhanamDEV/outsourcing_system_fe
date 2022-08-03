import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {useSelector} from "react-redux";
import logo from '../../../assets/images/logo.png';
import {ListItem} from "@mui/material";
import './sidebar.css'

const Sidebar = () => {
    const sidebarState = useSelector(state => state.sidebar);

    return (
            <Drawer
                sx={{
                    width: sidebarState.width,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: sidebarState.width,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={sidebarState.visible}
                id={"sidebar"}
            >
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <List className={'list-menu-item'}>
                    {sidebarState.items.map((value, index) => <ListItem className={`menu-item ${value.active ? 'active' : ''}`} key={index} >
                        <ListItemButton className={'item-button'}>
                            <ListItemIcon className={'icon'}>
                                {value.icon}
                            </ListItemIcon>
                            <ListItemText primary={value.name}/>
                        </ListItemButton>
                    </ListItem>)}

                </List>

            </Drawer>
    );
}

export default Sidebar;