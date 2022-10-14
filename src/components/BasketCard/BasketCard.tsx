import React from 'react';
import { Box, Text, Image, Button, Flex, HStack } from '@chakra-ui/react';
import { useBasket } from 'contexts/BasketContext';
import { BasketProductType } from 'pages/Basket';
import { useNavigate } from 'react-router-dom';

export const BasketCard = ({
    name,
    img,
    colour,
    price,
    id,
    quantity,
}: BasketProductType) => {
    const navigate = useNavigate();
    const { onAdd, onRemove } = useBasket();
    return (
        <Flex
            boxShadow="sm"
            p="6"
            rounded="md"
            bg="white"
            w="100%"
            justifyContent="space-between"
        >
            <Image
                boxSize="150px"
                minW="150px"
                objectFit="cover"
                cursor="pointer"
                src={img}
                alt={name}
                onClick={() => navigate(`products/${id}`)}
            />
            <Box pl="20px">
                <Text fontSize="20px">{name}</Text>
                <Flex justifyContent="space-between" m="10px 0">
                    <Text>Color: {colour}</Text>
                    <Text>Price: {price}£</Text>
                    <Text>Quantity: {quantity}</Text>
                </Flex>
            </Box>
            <HStack spacing="10px">
                <Button onClick={() => onAdd(id)}>Increase</Button>
                <Button onClick={() => onRemove(id)}>Decrease</Button>
            </HStack>
        </Flex>
    );
};
