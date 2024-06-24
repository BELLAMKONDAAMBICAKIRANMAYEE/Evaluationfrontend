import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { Box, Typography } from '@mui/material';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            const data = await fetchProductById(id);
            setProduct(data);
        };

        getProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <Box>
            <Typography variant="h3">{product.name}</Typography>
            <img src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} />
            <Typography variant="body1">Company: {product.company}</Typography>
            <Typography variant="body1">Category: {product.category}</Typography>
            <Typography variant="body1">Price: ${product.price}</Typography>
            <Typography variant="body1">Rating: {product.rating}</Typography>
            <Typography variant="body1">Discount: {product.discount}%</Typography>
            <Typography variant="body1">Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
        </Box>
    );
};

export default ProductDetail;
