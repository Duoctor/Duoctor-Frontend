import React from "react";
import { AppBar, IconButton, Typography, Button } from "@material-ui/core"
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css"
import { Home } from "@material-ui/icons";
import { ClassNames } from "@emotion/react";
import TextField from '@material-ui/core/TextField';


function Navbar() {
    return (
        <>
            <div className="root" style={{background:"#001fb5"}} >
                <AppBar position="static" className="appBar">
                    <Toolbar>
                        <IconButton edge="start" className="menuButton" aria-label="menu" style={{color: "white", fontWeight:"bold"}} >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="title">
                           Home
                        </Typography>
                        <Button  className="options" style={{ color: "white", fontWeight: "bold", fontFamily: "arial sans serif" }}>Sobre</Button>
                        <Button className="options" style={{ color: "white ", fontWeight: "bold", fontFamily: "arial sans serif" }}>Quero pedir ajuda</Button>
                        <Button className="options"  style={{ color: "white ", fontWeight: "bold", fontFamily: "arial sans serif" }}>Quero ser um doador</Button>
                        <Button className="options" style={{ color: "white ", fontWeight: "bold" , fontFamily: "arial sans serif"}}>Entrar</Button>
                       

                    </Toolbar>
                </AppBar>
            </div>

        </>
    );
}

export default Navbar;