import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from './ProductCard';
import { Box, Grid, Select, MenuItem, TextField, Button } from '@mui/material';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        company: '',
        rating: 0,
        priceRange: [0, 1000],
        availability: true
    });

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
            setFilteredProducts(data);
        };

        getProducts();
    }, []);

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        let filtered = products;
        if (filters.category) {
            filtered = filtered.filter(p => p.category === filters.category);
        }
        if (filters.company) {
            filtered = filtered.filter(p => p.company === filters.company);
        }
        if (filters.rating) {
            filtered = filtered.filter(p => p.rating >= filters.rating);
        }
        if (filters.availability) {
            filtered = filtered.filter(p => p.availability === filters.availability);
        }
        filtered = filtered.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

        setFilteredProducts(filtered);
    };

    return (
        <Box>
            <Box>
                <Select name="category" value={filters.category} onChange={handleFilterChange}>
                    <MenuItem value="">All Categories</MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="fashion">Fashion</MenuItem>
                    <MenuItem value="home">Home</MenuItem>
                </Select>
                <Select name="company" value={filters.company} onChange={handleFilterChange}>
                    <MenuItem value="">All Companies</MenuItem>
                    <MenuItem value="company1">Company 1</MenuItem>
                    <MenuItem value="company2">Company 2</MenuItem>
                    <MenuItem value="company3">Company 3</MenuItem>
                </Select>
                <TextField name="rating" type="number" label="Rating" value={filters.rating} onChange={handleFilterChange} />
                <TextField name="priceRange" type="number" label="Min Price" value={filters.priceRange[0]} onChange={(e) => setFilters({ ...filters, priceRange: [Number(e.target.value), filters.priceRange[1]] })} />
                <TextField name="priceRange" type="number" label="Max Price" value={filters.priceRange[1]} onChange={(e) => setFilters({ ...filters, priceRange: [filters.priceRange[0], Number(e.target.value)] })} />
                <Button onClick={applyFilters}>Apply Filters</Button>
            </Box>
            <Grid container spacing={2}>
                {filteredProducts.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductList;
