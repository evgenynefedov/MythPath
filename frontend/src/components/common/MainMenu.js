import * as React from "react";
import { Paper } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

import Icons from './../../themes/sprite.svg'

export default function MainMenu() {
  return (
    <>
        <Paper className="menu">
            <div className="menu_main">
                <Link to="/">
                    <svg>
                        <use href={`${Icons}#castle`}/>
                    </svg>
                    <span>Home</span>
                </Link>
                <Link to="/wizard">
                    <svg>
                        <use href={`${Icons}#feather`}/>
                    </svg>
                    <span>Create new tale</span>
                </Link>
            </div>
            <Link to="/wizard">
                <svg>
                    <use href={`${Icons}#settings`}/>
                </svg>
                <span>Settings</span>
            </Link>
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
