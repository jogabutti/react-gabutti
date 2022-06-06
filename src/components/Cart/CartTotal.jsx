//@ts-check
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function CartTotal({desc, total}) {
  return (
    <Card elevation={3} sx={{width: "40vw", height:"25vh", margin:"2%", padding:"2%",borderRadius:"20px"}}>
        <CardContent  sx={{paddingBottom:0,height:"75%",width:"90%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
            <CardContent  sx={{padding:0, display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <Typography gutterBottom variant="h4" component="div">
                    RESUMEN DEL PEDIDO
                </Typography>
            </CardContent>
            <Box  sx={{padding:"0% 3% 0%", display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"end"}}>
              <Box  sx={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"space-between"}}> 
                  <Typography  variant="button" fontSize={20} color="text.secondary">
                    SUB TOTAL 
                  </Typography>
                  <Typography  variant="button" fontSize={20} color="text.secondary">
                      {"$"+total}
                  </Typography>
              </Box>
              <Box  sx={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"space-between"}}> 
                <Typography variant="button" fontSize={20}  color="green">
                    {"DESCUENTO " + (desc*100) + "% " }
                </Typography>
                <Typography variant="button" fontSize={20}color="green">
                    {" -$" + (total*desc)}
                </Typography>
              </Box>
              <Box  sx={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"space-between"}}> 
                <Typography variant="button" fontSize={20}>
                    TOTAL
                </Typography>
                <Typography variant="button" fontSize={20}>
                    {"$" +  (total - (desc*total))}
                </Typography>
              </Box>
            </Box>
        </CardContent>
    </Card>
  );
}
