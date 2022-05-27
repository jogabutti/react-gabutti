//@ts-check
import React, { useContext} from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Badge, Box} from '@mui/material';
import { CartContext } from '../../context/CartContext';

export default function CartWidget({cant}) {
  const {totalInCart} = useContext(CartContext)

  return (
     <Badge badgeContent={totalInCart()} color="secondary">
        {/* ShoppingCart for responsive screens */}
        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <ShoppingCartOutlinedIcon fontSize="small"/>
        </Box>

        {/* ShoppingCart for desktop mode */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <ShoppingCartOutlinedIcon fontSize="large"/>
        </Box>
    </Badge>

  );
}