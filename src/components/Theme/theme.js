import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


export default function Themes({children}) {
    const [mode, setMode] = React.useState('light');
  
    const colorMode = React.useMemo(
    () => ({
        toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }),
    [],
    );

    const theme = React.useMemo(
    () =>
        createTheme({
        palette: {
            mode,
        },
        }),
    [mode],
    );

    console.log(theme)
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}