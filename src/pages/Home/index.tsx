import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'api/products';
import {
    setError,
    setLoading,
    setProducts,
} from 'features/products/productsSlice';
import { RootState } from 'store';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { ProductCard } from 'components/ProductCard';

const Home = () => {
    const { items } = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        getProducts()
            .then((response) => dispatch(setProducts(response)))
            .catch(() => dispatch(setError(true)))
            .finally(() => dispatch(setLoading(false)));
    }, []);

    return (
        <Box>
            <SimpleGrid columns={2} spacing={10}>
                {items.map((product) => (
                    <ProductCard {...product} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Home;
