//@ts-check
import React, {useState} from 'react';
import { 
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Box
} from '@mui/material';
import ItemCount from '../ItemCount';
import TerminarCompra from '../TerminarCompra'

export default function ItemDetail({item}) {
    const [state, setState] = useState()

    const onAdd=(cantidad)=>{
        setState(cantidad)
    }

    return (
        <Card elevation={3} sx={{ width:"95%",  margin:"2%", borderRadius:"20px", display:"flex", direction:"row"}}>
            <CardMedia
            component="img"
            alt="silla green iguana"
            height="450px"
            sx={{objectFit:'contain'}}
            image={item.image}
            />
             <Box sx={{ width:"60%", pl: 1, pb: 1 }}>
                <CardContent>
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
                    <CardActions sx={{flexDirection:"column", gap:"10px" }}>
                        {state ? 
                            <TerminarCompra/>
                            :
                            <ItemCount  stock={10} initial={1} onAdd={onAdd} />
                        }
                    </CardActions>
                </CardContent>
            </Box>
        </Card>
  );
}