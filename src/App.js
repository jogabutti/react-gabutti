import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A67CE',
      textColor:"white"
    },
    secondary: {
      light: '#000000',
      main: '#ffffff',
      textColor:"#000000",
      contrastText: '#000000',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <NavBar/>
      <ItemListContainer greeting={"Productos"}/>
    </ThemeProvider>
  );
}

export default App;
