import * as React from 'react';

import { render } from '@testing-library/react';
import { BasketContextProvider } from './contexts/BasketContext';
import { BrowserRouter } from 'react-router-dom';

interface ProviderProps {
    children?: any;
}

// keep provider for future possible contexts covers
const TheProvider: React.FC<ProviderProps> = ({ children }) => (
    <BrowserRouter>
        <BasketContextProvider>{children}</BasketContextProvider>
    </BrowserRouter>
);

const customRender = (ui: React.ReactElement, options = {}) =>
    render(ui, { wrapper: TheProvider, ...options });

// re-export everything
export * from '@testing-library/react';
export * from '@testing-library/jest-dom';

// override render method
export { customRender as render };
