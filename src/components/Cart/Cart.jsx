//@ts-check
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, CardActionArea, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart({row, clear}) {
  return (
    <Card elevation={3} sx={{margin:"2%", marginBottom:"5%",borderRadius:"20px"}}>
      <CardActionArea sx={{display:"flex", direction:"row"}}>
        <CardMedia
          component="img"
          height="190"
          sx={{objectFit:'contain'}}
          image={row.image}
          alt={"Silla " + row.title}
        />
        <CardContent  sx={{paddingBottom:0,height:"80%",width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
            <CardContent  sx={{padding:0, display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <Box>
                    <Typography gutterBottom variant="h4" component="div">
                        {row.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {"$ " + row.precio + " x "+ row.quantity}
                    </Typography>
                </Box>
                <Box sx={{ display:"flex", alignItems:"flex-start"}} >
                    <IconButton size="small" color="primary" >
                        <DeleteIcon fontSize="medium" color='disabled' onClick={()=>clear(row.id)}/>
                    </IconButton>
                </Box>
            </CardContent>
            <Box sx={{padding:"0% 3% 0%", display:"flex", justifyContent:"end"}}>
                <Typography variant="h6" color="text.secondary">
                    {"SUBTOTAL $" +  row.precio * row.quantity}
                </Typography>
            </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
