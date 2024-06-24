import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={`https://via.placeholder.com/150?text=${product.name}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Company: {product.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rating: {product.rating}
                </Typography>
                <Link to={`/product/${product.id}`}>View Details</Link>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
