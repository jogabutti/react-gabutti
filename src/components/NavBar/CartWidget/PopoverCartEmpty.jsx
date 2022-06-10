 
import React from 'react';
import Popover from '@mui/material/Popover';
import {Typography, Box, Button} from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {NavLink} from 'react-router-dom';

export default function PopoverCartEmpty({anchorEl, open, handleClose, id}) {

  return (
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        >
        <Box sx={{
          width:"14vw",
          padding:"0.5vw"
          }}>
            <Box  sx={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}> 
                <RemoveShoppingCartIcon style={{fontSize:"6vw", color:"#1B262C"}}/>
                <Typography  variant="h6" fontSize={18} color="text.secondary">
                    Su carrito esta vacio
                </Typography>  
                <NavLink to={`/`} style={{color:"inherit", textDecoration:"none", margin:"2%"}}>
                    <Button variant="contained" size="large" onClick={()=>handleClose()} >
                        Ver productos
                    </Button>
                </NavLink>
            </Box>
        </Box>
      </Popover>
  );
}