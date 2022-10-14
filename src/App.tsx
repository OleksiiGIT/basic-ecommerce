import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Basket from 'pages/Basket';
import Home from './pages/Home';
import Product from './pages/Product';
import { Box, Container, HStack, Text } from '@chakra-ui/react';

function App() {
    return (
        <Container maxW="1024px">
            <Box>
                <Text fontSize="24px" textAlign="center">
                    Test store
                </Text>
                <HStack
                    justifyContent="center"
                    spacing="20px"
                    textDecoration="underline"
                >
                    <Link to="/">Products</Link>
                    <Link to="/basket">Basket</Link>
                </HStack>
            </Box>
            <Box mt="50px">
                <Routes>
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:id" element={<Product />} />
                </Routes>
            </Box>
        </Container>
    );
}

export default App;
