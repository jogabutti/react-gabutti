import {useState, useContext, useEffect} from 'react';
import { 
    Card,
    CardMedia,
    Typography,
    Box
} from '@mui/material';
import ItemCount from '../ItemCount';
import {CartContext} from '../../context/CartContext';

export default function ItemDetail({item}) {
    const {cart} = useContext(CartContext);
    const [state, setState] = useState(false)
    const [quantityInCart, setQuantityInCart] = useState(0)

    const onAdd=()=>{
        setState(true)
    }

    useEffect(() => {
        setQuantityInCart(cart.map(prod=>{ 
            if (prod.id === item.id){
                return prod.quantity
            }else{
                return [0]
            } 
        })[0] || 0)  
        // eslint-disable-next-line
    }, [item])

    return (
        <Card elevation={3} sx={{ width:"70%", height:"80%", borderRadius:"20px", display:"flex", direction:"row", justifyContent:"center", alignItems:"center"}}>
            <Box sx={{ width:"50%", height:"90%"}}>
                <CardMedia
                component="img"
                alt="silla green iguana"
                height="90%"
                sx={{objectFit:'contain'}}
                image={item.image}
                />
            </Box>
             <Box sx={{ width:"50%",  height:"50%",}}>
                <Typography gutterBottom variant="h2" component="div">
                    {item.title}
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ display: { xs: "none", md:"flex"} }}>
                    {item.description}
                </Typography>
                <Typography variant="h4" color="text.secondary" sx={{ display: { xs: "none", md:"flex"} }}>
                    6 cuotas de  ${(item.precio * 1.50)/6}
                </Typography>
                <Typography variant="h6" color="#4E9F3D">
                    Precio contado
                </Typography>
                <Typography variant="h6" color="4E9F3D">
                $ {item.precio}
                </Typography>
                <Typography variant="overline" color={item.stock>5 ? "#4E9F3D" : "#AF0404"}>
                    Stock Disponible {item.stock }
                </Typography>
                <ItemCount  initial={0} onAdd={onAdd} state={state} item = {item} quantityInCart={quantityInCart}/>
                {quantityInCart>0
                &&
                <Typography variant="button" color={"#4E9F3D"}>
                    Ya tienes {quantityInCart} sillas en el carrito
                </Typography>
                }
            </Box>
        </Card>
  );
}