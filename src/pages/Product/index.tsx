import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/products';
import { ProductType } from '../../api/products/types';
import { ProductCard } from '../../components/ProductCard';
import { Box, CircularProgress } from '@chakra-ui/react';

const Product = () => {
    const { id } = useParams();

    const [product, setProduct] = useState<ProductType | undefined>();

    useEffect(() => {
        id && getProductById(id).then((res) => setProduct(res));
    }, [id]);

    return (
        <>
            {product ? (
                <ProductCard {...product} />
            ) : (
                <Box textAlign="center">
                    <CircularProgress isIndeterminate />
                </Box>
            )}
        </>
    );
};

export default Product;
