import { AppBar, Box, Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import React from "react";
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const pages = [
    { label: "Home", link: "/" },
    { label: "Checkout", link: "/checkout" },
    { label: "Contacto", link: "/contacto" },
    { label: "deportes", link: "/category/deportes" },
    { label: "fiesta", link: "/category/fiesta" },
];

export default function Navbar() {
    return (
        <AppBar  className="nav" position="static" style={{ backgroundColor: "green" }} color="secondary">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="10vh"
            >
                <Box
                    display="flex"
                    mt={2}
                    mb={2}
                    mr={10}
                >
                    <Avatar sx={{ width: 100, height: 100, bgcolor: green[600] }}><Logo /></Avatar>
                    <Typography
                        mt={4}
                        ml={2}
                        variant="h4"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        PLANTASACUATICAS.COM.AR
                    </Typography>
                </Box>
                <Button variant="contained" color="success"><Link to="/category/fondo">Fondo</Link></Button>
                <Button variant="contained" color="success"><Link to="/category/flote">Flote</Link></Button>
                <Button variant="contained" color="success"><Link to="/category/palustre">Palustre</Link></Button>
                <Button variant="contained" color="success"><Link to="/category/piedra">Piedra</Link></Button>
                <Box marginLeft={25}><CartWidget/></Box>
            </Box>
        </AppBar>
    );
}