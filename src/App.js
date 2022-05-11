import NavBar from "./components/NavBar/NavBar.jsx"
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A67CE',
      textColor:"white"
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <NavBar/>
    </ThemeProvider>
  );
}

export default App;
