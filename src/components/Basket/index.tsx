import {useBasket} from "../../contexts/BasketContext";
import React, {useEffect, useState} from "react";
import {ProductsResponseType, ProductType} from "../../api/products/types";
import {getProducts} from "../../api/products";

export type BasketProducts = Array<ProductType & { quantity: number; }>;

const Basket = () => {
    const { productsIds: basketProductsIds, onRemove, onAdd } = useBasket();
    const [products, setProducts] = useState<ProductsResponseType>([]);

    useEffect(() => {
        //TODO: This should be replaced by getProductsByIds request
        getProducts().then((res) => setProducts(res));
    } , [])

    const replaceIdByProductData = (fetchedProducts: ProductsResponseType, basketIds: number[]) => {
        if (!fetchedProducts.length) return [];

        return basketIds.reduce((acc: BasketProducts, value) => {
            const product = acc.find(item => item.id === value)
            if (product) {
                product.quantity++;
            } else {
                const currentProduct = fetchedProducts.find(item => item.id === value);
                if (currentProduct) {
                    acc.push({
                        ...currentProduct,
                        quantity: 1,
                    })
                }
            }
            return acc;
        }, [])
    }

    return (
        <div>
            {JSON.stringify(replaceIdByProductData(products, basketProductsIds), null, 2)}
            <button onClick={() => onAdd(1)}>+</button>
            <button onClick={() => onRemove(1)}>-</button>
        </div>
    );
}

export default Basket;