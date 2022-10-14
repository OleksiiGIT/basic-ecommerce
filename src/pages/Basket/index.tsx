import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ProductsResponseType, ProductType } from 'api/products/types';
import { useBasket } from 'contexts/BasketContext';
import { Box, VStack, Text } from '@chakra-ui/react';
import { BasketCard } from 'components/BasketCard';

export type BasketProductType = ProductType & { quantity: number };

export type BasketProducts = Array<BasketProductType>;

const Basket = () => {
    //TODO: Save basket to local storage
    const { productsIds: basketProductsIds } = useBasket();
    const products = useSelector((state: RootState) => state.products.items);

    //TODO: replace by getProductsByIds
    const replaceIdByProductData = (
        fetchedProducts: ProductsResponseType,
        basketIds: number[]
    ) => {
        if (!fetchedProducts.length) return [];

        return basketIds.reduce((acc: BasketProducts, value) => {
            const product = acc.find((item) => item.id === value);
            if (product) {
                product.quantity++;
            } else {
                const currentProduct = fetchedProducts.find(
                    (item) => item.id === value
                );
                if (currentProduct) {
                    acc.push({
                        ...currentProduct,
                        quantity: 1,
                    });
                }
            }
            return acc;
        }, []);
    };

    return (
        <Box>
            <VStack spacing="20px">
                {!basketProductsIds.length && <Text>Empty basket</Text>}
                {replaceIdByProductData(products, basketProductsIds)
                    .sort((a, b) => a.id - b.id)
                    .map((product) => (
                        <BasketCard key={product.id} {...product} />
                    ))}
            </VStack>
        </Box>
    );
};

export default Basket;
