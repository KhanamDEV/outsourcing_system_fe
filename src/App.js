import logo from './logo.svg';
import './App.css';
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import Login from "./pages/login/Login";
import '../src/utils/validateMessage';
import RouteList from "./routes";
let theme = createTheme({
    palette: {
        primary: {
            main: '#05C46B',
        },
    },
});

function App() {
    return <ThemeProvider theme={theme}>
        <RouteList />
    </ThemeProvider>
}

export default App;
