import React from 'react'
import { CircularProgress, Box, } from '@mui/material'

export default function ItemListContainer() {

return(
    <Box sx={{ display: 'flex', direction:'row', justifyContent:'center', marginTop:"10%"}}>
        <CircularProgress size={"80px"}/>
    </Box>
)}
