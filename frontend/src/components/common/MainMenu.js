import * as React from "react";
import { Paper } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";

export default function MainMenu({changeTheme}) {
  return (
    <>
        <Paper className="menu">
            <div className="menu_main">
                <Link to="/" className="menu_item menu_item__home">
                    <span>Home</span>
                </Link>
                <Link to="/wizard" className="menu_item menu_item__create">
                    <span>Create new tale</span>
                </Link>
            </div>
            {/* <Link to="/settings" className="menu_item menu_item__settings">
                <span>Settings</span>
            </Link> */}
            <ThemeSelector changeTheme={changeTheme}/>
        </Paper>
        <>
            <Outlet />
        </>
    </>
    // <Paper>
    //     Main menu
    // </Paper>
  );
}
