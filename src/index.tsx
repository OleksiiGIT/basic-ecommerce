import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './store';
import App from './App';
import { BasketContextProvider } from 'contexts/BasketContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ChakraProvider>
                <BasketContextProvider>
                    <App />
                </BasketContextProvider>
            </ChakraProvider>
        </BrowserRouter>
    </Provider>
);
