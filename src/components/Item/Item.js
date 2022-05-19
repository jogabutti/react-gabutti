//@ts-check
import React from 'react';
import { 
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Link
} from '@mui/material';
import ItemCount from '../ItemCount';

export default function Item({stock, initial, onAdd, item}) {
   
    return (
        <Card elevation={3} sx={{ maxWidth: 345, borderRadius:"20px" }}>
            <Link href={`/productos/${item.id}`} color="inherit" underline="none">
                <CardMedia
                component="img"
                alt="silla green iguana"
                height="250px"
                sx={{objectFit:'contain'}}
                image={item.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions sx={{flexDirection:"column", gap:"10px", justifyContent:"center", alignItems:"center" }}>
                <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
            </CardActions>
        </Card>
  );
}