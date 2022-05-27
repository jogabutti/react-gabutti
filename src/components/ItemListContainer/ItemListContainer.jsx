//@ts-check
import React, {useEffect, useState} from 'react';
import { Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import {data} from '../../data/data'
import Loading from '../Loading'

export default function ItemListContainer({greeting}) {
  const { id } = useParams()
  const [productos, setProductos]= useState([])
  const [loading, setLoading]= useState(true)
  const [error, setError]= useState("")

  useEffect(() => {
      setLoading(true);
      const productosPromise = new Promise ((res, rej)=>{
          setTimeout(()=>{
            const myData = id ? data.filter(prod => prod.category === id.toLowerCase()) : data
            res(myData)
          }, 2000);
        })
      productosPromise.then(res => { 
          setLoading(false)
          setProductos(res)
        }, rej =>{
          setLoading(false)
          setError("Error 404")
        }).finally(()=> {setLoading(false)})
  }, [id])

  return (
    <>
      {loading ? 
          <Box sx={{ width:"100vw",height: "80vh",  display:"flex", direction:"column", justifyContent:"center", alignItems:"center"}}>
            <Loading/>
          </Box>
         :
         error ? 
            <p> {error}</p>
          :
            <>
              <Typography variant="h4" color="text.secondary" align="center"  mb={2} mt={2}>
                {greeting}
              </Typography>
              <ItemList items={productos} />
            </>
      }
    </>
  );
}