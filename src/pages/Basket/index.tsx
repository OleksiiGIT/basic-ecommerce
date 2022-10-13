import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ProductsResponseType, ProductType } from 'api/products/types';
import { useBasket } from 'contexts/BasketContext';

export type BasketProducts = Array<ProductType & { quantity: number }>;

const Basket = () => {
    //TODO: Save basket to local storage
    const { productsIds: basketProductsIds, onRemove, onAdd } = useBasket();
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
        <div>
            {JSON.stringify(
                replaceIdByProductData(products, basketProductsIds),
                null,
                2
            )}
            <button onClick={() => onAdd(1)}>+</button>
            <button onClick={() => onRemove(1)}>-</button>
        </div>
    );
};

export default Basket;
