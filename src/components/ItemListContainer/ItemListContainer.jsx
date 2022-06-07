//@ts-check
import React, {useEffect, useState} from 'react';
import { Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading'
import {fetchItems} from '../../server/Querys';
import Error from '../Error';

export default function ItemListContainer({greeting}) {
  const { id } = useParams()
  const [productos, setProductos]= useState([])
  const [loading, setLoading]= useState(true)
  const [error, setError]= useState(false)

  useEffect(() => {
      setLoading(true);
        fetchItems(id || "")
          .then((snapshot)=> {
            if (snapshot.size === 0) { 
              setError(true)
            }else{
              setProductos(snapshot.docs.map((item)=>({id: item.id, ...item.data()})));
              setError(false)
            }
            setLoading(false)
          })
          .catch((error)=>{
            setError(true)
            setLoading(false)
          })
  }, [id])

  return (
    <>
      {loading ? 
          <Box sx={{ width:"100vw",height: "80vh",  display:"flex", direction:"column", justifyContent:"center", alignItems:"center"}}>
            <Loading/>
          </Box>
         :
         error ? 
            <Error msg={`Error al intentar acceder a la categoria ${id}`}/>
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