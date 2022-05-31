//@ts-check
import React, { useContext, useEffect, useState} from 'react';
import {Badge, Box} from '@mui/material';
import { CartContext } from '../../../context/CartContext';
import PopoverCart from './PopoverCart'

export default function CartWidget() {
  const {totalInCart} = useContext(CartContext)
  const [state, setState]= useState()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setState(totalInCart())
  }, [totalInCart])

  return (
     <Badge badgeContent={state} color="secondary">
        {/* ShoppingCart for responsive screens */}
        <Box onClick={handleClick} sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
          <img alt="icono next" src="/cart.png"  style={{width:"20px", filter: "invert(100%)"}}/>
        </Box>

        {/* ShoppingCart for desktop mode */}
        <Box onClick={handleClick} sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <img alt="icono next" src="/cart.png"  style={{width:"30px", filter: "invert(100%)"}}/>
        </Box>
        {state ? <PopoverCart anchorEl={anchorEl} open={open} handleClose={handleClose} id={id}/> : <></>}
    </Badge>
  );
}