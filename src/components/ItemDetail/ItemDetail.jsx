//@ts-check
import React from 'react';
import { 
    Card,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';

export default function ItemDetail({item}) {
    return (
        <Card elevation={3} sx={{ margin:"5%", borderRadius:"20px", display:"flex", direction:"row" }}>
            <CardMedia
            component="img"
            alt="silla green iguana"
            height="500px"
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
        </Card>
  );
}