//@ts-check
import React, {useState, useContext} from 'react';
import { 
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Box
} from '@mui/material';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount';

export default function ItemDetail({item}) {
    const {removeItems, addItems, clear, isInCart}= useContext(CartContext)

    const [state, setState] = useState()

    const onAdd=(cantidad)=>{
        setState(cantidad)
    }
    
    return (
        <Card elevation={3} sx={{ width:"70%", height:"70%", borderRadius:"20px", display:"flex", direction:"row", justifyContent:"center", alignItems:"center"}}>
             <Box sx={{ width:"50%", height:"90%"}}>
                <CardMedia
                component="img"
                alt="silla green iguana"
                height="90%"
                sx={{objectFit:'contain'}}
                image={item.image}
                />
            </Box>
             <Box sx={{ width:"50%"}}>
                <Typography gutterBottom variant="h2" component="div">
                    {item.title}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    {item.description}
                </Typography>
                <Typography variant="h4" color="text.secondary">
                    6 cuotas de  ${(item.precio * 1.50)/6}
                </Typography>
                <Typography variant="h6" color="#4E9F3D">
                    Precio contado
                </Typography>
                <Typography variant="h6" color="4E9F3D">
                $ {item.precio}
                </Typography>
                <Typography variant="overline" color={item.stock>5 ? "#4E9F3D" : "#AF0404"}>
                    Stock Disponible {item.stock}
                </Typography>
                <ItemCount  stock={item.stock} initial={1} onAdd={onAdd} state={state} addItems = {addItems} item = {item} />
            </Box>
        </Card>
  );
}