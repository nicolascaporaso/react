import React from "react";
import Avatar from '@mui/material/Avatar';
import SpaIcon from '@mui/icons-material/Spa';
import { AppBar, Button, ButtonGroup, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import { red, green } from '@mui/material/colors';
import CartWidget from "./CartWidget";
import Logo from "./Logo";


export default function Navbar() {
    return (
        <AppBar position="static" style={{ backgroundColor: "green" }} color="secondary">
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
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
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
                <Button variant="contained" color="success"><a href="https://plantasacuaticas.com.ar/paginas/plantas.html">Plantas</a></Button>
                <Button variant="contained" color="success"><a href="https://plantasacuaticas.com.ar/paginas/tienda.html">Tienda</a></Button>
                <Button variant="contained" color="success"><a href="https://plantasacuaticas.com.ar/paginas/formulario.html">Contacto</a></Button>
                <Box marginLeft={25}><Button variant="contained" color="success" ><a href=""><CartWidget /></a></Button></Box>
            </Box>
        </AppBar>
    );
}