import React from 'react';
import { 
  IconButton, 
  Typography, 
  Toolbar, 
  Box, 
  AppBar
} from '@mui/material'
import {NavLink} from 'react-router-dom'
import MenuNavBar from './MenuNavBar/MenuNavBar'
import CartWidget from './CartWidget';

export default function NavBar() {
  let categorias=["Hogar", "Oficina", "Gamer"]
  
  return (
    <Box sx={{  flexGrow: 1, display: { xs: 'block', md: 'flex' } }}>
      <AppBar position="static" >
        <Toolbar sx={{  flexGrow: 1, display:{ xs: 'block', md: 'flex'}, textAlign:{xs:'center', md:'left'}}}>
        <NavLink to={`/`} style={{color:"inherit", textDecoration:"none"}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, gap:"20px" }}
            >
              <img alt="icono next" src="/next.png"  style={{width:"30px", filter: "invert(100%)"}}/>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                Next Generation
              </Typography>
            </IconButton>
          </NavLink>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          </Typography>
          {categorias.map(categoria=> 
            <MenuNavBar key={categoria} title={categoria}/>
          )}
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}