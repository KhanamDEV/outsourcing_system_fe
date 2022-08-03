import {AppBar, Avatar, Button, Divider, IconButton, ListItemIcon, ListItemText, Toolbar, Tooltip} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch} from "react-redux";
import {toggleSidebar} from "../../../redux/slices/sidebarSlice";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {useState} from "react";
import Badge from '@mui/material/Badge';
import './header.css'


const Header = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return <AppBar position="static" className={'header-main'}>
        <Toolbar className={'toolbar-header'}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => dispatch(toggleSidebar())}
            >
                <MenuIcon style={{color: 'white'}} />
            </IconButton>
            <div className="quick-action">
                <div className="avatar">
                    <p>Andrew Nguyen</p>
                    <Tooltip title={'Open settings'}>
                        <Avatar onClick={handleClick} className={'avatar'} alt="Remy Sharp" src="https://picsum.photos/200/300" />
                    </Tooltip>
                </div>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}

                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <DashboardOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <PersonOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>Profile</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <LogoutOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </MenuItem>
                </Menu>

            </div>

        </Toolbar>
    </AppBar>
}

export default Header;