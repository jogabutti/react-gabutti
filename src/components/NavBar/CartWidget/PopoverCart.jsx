//@ts-check
import React, { useState, useContext, useEffect } from 'react';
import Popover from '@mui/material/Popover';
import {CartContext} from '../../../context/CartContext';
import {Typography, Box, IconButton, Button} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

export default function PopoverCart({anchorEl, open, handleClose, id}) {
  let history = useNavigate();
  const {cart, totalCart, clear} = useContext(CartContext)
  const [total, setTotal]=useState(0)
  const [desc, setDescuento]=useState(0.1)

  useEffect(() => {
    setTotal(totalCart())
    if (cart.length>3){
      setDescuento(0.3)
    }else {
      setDescuento(0.1)
    }
  }, [cart])
  
  const finish = ()=>{
    history("/cart");
    handleClose()
  }
  
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
          width:"20vw",
          padding:"1vw"
          }}>
            {cart.map((row) => (
              <Box sx={{
                display:"flex",
                flexDirection:"row"
              }}>
                <CardMedia
                  component="img"
                  height="140"
                  sx={{objectFit:'contain'}}
                  image={row.image}
                  alt={"Silla " + row.title}
                />
                <CardContent  sx={{paddingBottom:0,height:"40%",width:"100%", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                  <Typography  variant="h6" fontSize={18}>
                    {row.title}
                  </Typography>
                  <Typography  variant="h6" fontSize={14} color="text.secondary">
                    {row.quantity +" x "+ "$"+ row.precio * row.quantity}
                  </Typography>
                </CardContent>
                <Box sx={{ display:"flex", alignItems:"flex-start"}} >
                    <IconButton size="small" color="primary" >
                        <DeleteIcon fontSize="medium" color='disabled' onClick={()=>clear(row.id)}/>
                    </IconButton>
                </Box>
              </Box>
            ))}
            <hr></hr>
            <Box  sx={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-end", alignItems:"flex-end"}}> 
              <Box  sx={{width:"90%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}> 
                <Typography  variant="h6" fontSize={14} color="text.secondary">
                    Sub Total $
                </Typography>  
                <Typography  variant="h6" fontSize={14} color="text.secondary">
                    {"$"+total}
                </Typography>  
              </Box>
              <Box  sx={{width:"90%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}> 
                <Typography variant="h6" fontSize={16} color="green">
                  {"Descuento " + (desc*100) + "% "}
                </Typography>
                <Typography variant="h6" fontSize={16} color="green">
                  {"-$" + (total*desc)}
                </Typography>  
              </Box>
              <Box  sx={{width:"90%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}> 
                <Typography variant="h6" fontSize={16}>
                    {"Total "}
                </Typography>
                <Typography variant="h6" fontSize={16}>
                    {"$"+(total - (desc*total))}
                </Typography>
              </Box >
            <Box  sx={{width:"100%", marginTop:"2%"}}>
              <hr></hr>
              <Button
              fullWidth
                variant="contained"
                onClick={()=>finish()}
              >
                  Ir al carrito
              </Button>
            </Box>
            </Box>
        </Box>
      </Popover>
  );
}