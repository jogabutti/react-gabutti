import React from 'react';
import { 
  IconButton, 
  Typography, 
  Toolbar, 
  Box, 
  AppBar 
} from '@mui/material'
import MenuNavBar from './MenuNavBar/MenuNavBar'
import CartWidget from './CartWidget';

export default function NavBar() {
  let categorias=["Hogar", "Oficina", "Gamer"]
  
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
          {categorias.map(categoria=> 
            <MenuNavBar title={categoria}/>
          )}
          <CartWidget cant={8}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}