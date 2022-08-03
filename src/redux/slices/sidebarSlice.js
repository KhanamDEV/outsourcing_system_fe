import {createSlice} from "@reduxjs/toolkit";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import * as React from "react";

const initialState = {
    visible: true,
    width: 270,
    items: [
        {
            icon: <DashboardOutlinedIcon />,
            name: 'Dashboard',
            path: '',
            active: true
        },
        {
            icon: <AccountTreeOutlinedIcon />,
            name: 'Project',
            path: '',
            active: false
        },
        {
            icon: <PersonOutlineOutlinedIcon />,
            name: 'Profile',
            path: '',
            active: false
        },
        {
            icon: <LogoutOutlinedIcon />,
            name: 'Logout',
            path: '',
            active: false
        }
    ]
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar : state => {
            console.log(1);
            state.visible = !state.visible
        }
    }
});

export const {toggleSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;