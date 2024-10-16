import React from 'react';
import {createRoot} from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { Button } from '@mui/material';

const rootElement = document.getElementById('root');

if (rootElement !== null) {
    const theme = {
        main: 'green',
    };

    const root = createRoot(rootElement);

    root.render(
        <ThemeProvider theme={theme}>
            <Button variant="contained">Button</Button>
        </ThemeProvider>
    );
}