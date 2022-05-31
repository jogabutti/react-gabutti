
import React, {useEffect, useState} from 'react';
import { Box } from '@mui/material';
import {data} from '../../data/data'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading'
import Error from '../Error';
import {fetchItemById} from '../../server/querys';

export default function ItemDetailContainer() {
  const {id} = useParams()
  const [producto, setProducto]= useState([])
  const [loading, setLoading]= useState(true)
  const [error, setError]= useState(false)

  useEffect(() => {
      setLoading(true);
      fetchItemById(id)
      .then((snapshot)=> {
        if (!snapshot){
          setError(true)
        }else{
          setProducto({id: snapshot.id, ...snapshot.data()});
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
    <Box sx={{ width:"100vw",height: "80vh",  display:"flex", direction:"row", justifyContent:"center", alignItems:"center"}}>
      {loading ? 
          <Loading/>
         :
         error ? 
            <Error />
          :
            <ItemDetail item={producto}/>
      }
    </Box>
  );
}