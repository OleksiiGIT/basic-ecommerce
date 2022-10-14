import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'api/products';
import {
    setError,
    setLoading,
    setProducts,
} from 'features/products/productsSlice';
import { RootState } from 'store';
import { Box, CircularProgress, SimpleGrid } from '@chakra-ui/react';
import { ProductCard } from 'components/ProductCard';

const Home = () => {
    const dispatch = useDispatch();

    const { items, isLoading } = useSelector(
        (state: RootState) => state.products
    );

    useEffect(() => {
        dispatch(setLoading(true));
        getProducts()
            .then((response) => dispatch(setProducts(response)))
            .catch(() => dispatch(setError(true)))
            .finally(() => dispatch(setLoading(false)));
    }, []);

    return (
        <Box>
            {isLoading && (
                <Box textAlign="center">
                    <CircularProgress isIndeterminate />
                </Box>
            )}
            <SimpleGrid columns={2} spacing={10}>
                {items.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Home;
