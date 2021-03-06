import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/Cart/CartContainer'
import Error from './components/Error'
import { CartProvider } from './context/CartContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B262C'
    },
    secondary: {
      light: '#000000',
      main: '#ffffff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
});

const App = () => {
  return (
    <CartProvider >
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element ={<ItemListContainer greeting={"PRODUCTOS"}/>}/>
            <Route path="/categorias/:id" element ={<ItemListContainer greeting={""}/>}/>
            <Route path="/productos/:id" element ={<ItemDetailContainer />}/>
            <Route path="/cart" element={<CartContainer />}/>
            <Route path="/*" element ={<Error msg={""}/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
