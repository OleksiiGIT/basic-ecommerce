import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductsResponseType } from 'api/products/types';

export interface ProductsState {
    items: ProductsResponseType;
    isLoading: boolean;
    isError: boolean;
}

const initialState: ProductsState = {
    items: [],
    isError: false,
    isLoading: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductsResponseType>) => {
            state.items = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;

export default productsSlice.reducer;
