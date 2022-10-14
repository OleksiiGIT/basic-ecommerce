import React from 'react';
import { Box, Text, Image, Button, Flex } from '@chakra-ui/react';
import { ProductType } from 'api/products/types';
import { useBasket } from 'contexts/BasketContext';

export const ProductCard = ({ name, img, colour, price, id }: ProductType) => {
    const { onAdd } = useBasket();
    return (
        <Flex boxShadow="lg" p="6" rounded="md" bg="white">
            <Image
                boxSize="150px"
                minW="150px"
                objectFit="cover"
                src={img}
                alt={name}
            />
            <Box pl="20px">
                <Text fontSize="20px">{name}</Text>
                <Flex justifyContent="space-between" m="10px 0">
                    <Text>Color: {colour}</Text>
                    <Text>Price: {price}£</Text>
                </Flex>
                <Button onClick={() => onAdd(id)}>Add to basket</Button>
            </Box>
        </Flex>
    );
};
