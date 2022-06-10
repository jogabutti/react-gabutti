 
import React, { useContext, useEffect, useState} from 'react';
import {Badge, Box} from '@mui/material';
import { CartContext } from '../../../context/CartContext';
import PopoverCart from './PopoverCartEmpty'
import PopoverCartEmpty from './PopoverCart'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget() {
  const {totalInCart} = useContext(CartContext)
  const [state, setState]= useState(0)
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
          <ShoppingCartOutlinedIcon/> 
        </Box>

        {/* ShoppingCart for desktop mode */}
        <Box onClick={handleClick} sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <ShoppingCartOutlinedIcon fontSize="large"/> 
        </Box>
        {state === 0 ? 
          <PopoverCart anchorEl={anchorEl} open={open} handleClose={handleClose} id={id}/> 
        : 
          <PopoverCartEmpty anchorEl={anchorEl} open={open} handleClose={handleClose} id={id}/>}
    </Badge>
  );
}