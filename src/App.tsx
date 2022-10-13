import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Basket from 'pages/Basket';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
    return (
        <div>
            <header>
                <h1>Test store</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Products</Link>
                        </li>
                        <li>
                            <Link to="/basket">Basket</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:id" element={<Product />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
