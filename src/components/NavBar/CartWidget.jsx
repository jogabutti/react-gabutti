//@ts-check
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Badge, Box} from '@mui/material';

export default function CartWidget({cant}) {

  return (
     <Badge badgeContent={cant} color="secondary">
        {/* ShoppingCart for responsive screens */}
        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <ShoppingCartOutlinedIcon fontSize="medium"/>
        </Box>

        {/* ShoppingCart for desktop mode */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <ShoppingCartOutlinedIcon fontSize="large"/>
        </Box>
    </Badge>

  );
}