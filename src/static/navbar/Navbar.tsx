import React from "react";
import { AppBar, IconButton, Typography, Button } from "@material-ui/core"
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import "./Navbar.css"
import { Home } from "@material-ui/icons";
import { ClassNames } from "@emotion/react";
import TextField from '@material-ui/core/TextField';


function Navbar() {
    let log;
    return (
        <>
            <div className="root">
                <AppBar position="static" className="appBar">
                    <Toolbar>
                        <IconButton edge="start" className="menuButton" aria-label="menu" >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="title">
                           Home
                        </Typography>
                        <Button  className="options">Sobre</Button>
                        <Button className="options">Quero pedir ajuda</Button>
                        <Button className="options">Quero ser um doador</Button>
                        <Link to= '/entrar'>
                        <Button className="options">Sair</Button>
                        </Link>
                        
                       

                    </Toolbar>
                </AppBar>
            </div>

        </>
    );
}

export default Navbar;