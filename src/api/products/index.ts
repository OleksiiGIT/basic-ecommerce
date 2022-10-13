import httpClient from '../client'
import { ProductsResponseType, ProductType } from './types'

export const getProducts = async () => {
    const { data } = await httpClient.get<ProductsResponseType>(
        '/products/products'
    )
    return data
}

export const getMenu = async () => {
    const { data } = await httpClient.get('/products/menu')
    return data
}

export const getProductById = async (id: string) => {
    const { data } = await httpClient.get<ProductType>(
        `/products/products/${id}`
    )
    return data
}
