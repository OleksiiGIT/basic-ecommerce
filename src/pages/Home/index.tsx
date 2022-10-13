import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'api/products';
import {
    setError,
    setLoading,
    setProducts,
} from 'features/products/productsSlice';
import { RootState } from 'store';

const Home = () => {
    const products = useSelector((state: RootState) => state.products.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        getProducts()
            .then((response) => dispatch(setProducts(response)))
            .catch(() => dispatch(setError(true)))
            .finally(() => dispatch(setLoading(false)));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {products.map((item) => item.id)}
        </div>
    );
};

export default Home;
