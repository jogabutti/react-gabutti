//@ts-check
import React, { useContext, useEffect, useState} from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Badge, Box} from '@mui/material';
import { CartContext } from '../../../context/CartContext';

export default function CartWidget() {
  const {totalInCart} = useContext(CartContext)
  const [state, setState]= useState()

  useEffect(() => {
    setState(totalInCart())
  }, [totalInCart])


  return (
     <Badge badgeContent={state } color="secondary">
        {/* ShoppingCart for responsive screens */}
        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
          <img alt="icono next" src="/cart.png"  style={{width:"20px", filter: "invert(100%)"}}/>
        </Box>

        {/* ShoppingCart for desktop mode */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <img alt="icono next" src="/cart.png"  style={{width:"30px", filter: "invert(100%)"}}/>
        </Box>
    </Badge>

  );
}