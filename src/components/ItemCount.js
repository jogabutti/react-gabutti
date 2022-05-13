//@ts-check
import React, {useState} from 'react';
import { 
    ButtonGroup,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';

export default function ItemCount({stock, initial, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)

    const sumar =()=>{
        if (cantidad<=stock){
            setCantidad(cantidad+1)
        }
    }
    const restar =()=>{
        if (cantidad>0){
            setCantidad(cantidad-1)
        }
    }
  
    return (
        <Card elevation={3} sx={{ maxWidth: 345, borderRadius:"20px" }}>
            <CardMedia
            component="img"
            alt="silla green iguana"
            height="250px"
            sx={{objectFit:'contain'}}
            image="./silla2.jpg"
            
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Código	12673354
                    Alto 20 Ancho 150 Profundidad	132  ×  72  ×  74  cm
                    Alto al Asiento	56 cm
                    Apilables	NO
                </Typography>
            </CardContent>
            <CardActions sx={{flexDirection:"column", gap:"10px", justifyContent:"center", alignItems:"center" }}>
                <ButtonGroup disableElevation variant="contained">
                    <Button 
                        onClick={()=>{restar() }}
                        disabled={cantidad===0}
                    >
                        -
                    </Button>
                    <Button 
                        variant="text"
                        sx={{cursor: "default", mouseOver:'none'}}
                        
                    >
                        {cantidad}
                    </Button>
                    <Button 
                        disabled={cantidad===stock}
                        onClick={()=>{sumar() }}
                    >
                        +
                    </Button>
                </ButtonGroup>
                <Button 
                    disabled={cantidad===0 || cantidad===stock}
                    onClick={()=>{onAdd(cantidad)}}
                >
                    Agregar al carrito
                </Button>
            </CardActions>
        </Card>
  );
}