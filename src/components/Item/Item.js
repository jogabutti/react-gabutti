 
import React from 'react';
import { 
    Card,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import {NavLink} from 'react-router-dom'

export default function Item({item}) {
   
    return (
        <Card elevation={3} sx={{maxWidth: 345, borderRadius:"20px"}}>
            <NavLink to={`/productos/${item.id}`} style={{color:"inherit", textDecoration:"none"}}>
                <CardMedia
                component="img"
                alt="silla green iguana"
                height="200px"
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
            </NavLink>
        </Card>
  );
}