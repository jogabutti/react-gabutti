import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuNavBar from './MenuNavBar/MenuNavBar'
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <Box sx={{  flexGrow: 1, display: { xs: 'block', md: 'flex' } }}>
      <AppBar position="static" >
        <Toolbar sx={{  flexGrow: 1, display:{ xs: 'block', md: 'flex'}, textAlign:{xs:'center', md:'left'}}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img alt="icono ola" src="./ola.png"  style={{width:"60px", borderRadius:"100px"}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Ola
          </Typography>
          <MenuNavBar title={"Hogar"}/>
          <MenuNavBar title={"Oficina"}/>
          <MenuNavBar title={"Gamer"}/>
          <CartWidget cant={8}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}