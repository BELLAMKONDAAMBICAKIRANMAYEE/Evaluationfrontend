import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { Container, Typography, Button, TextField } from '@mui/material';

function App() {
  return (
    <Container>
     
      <Typography variant="h2" component="h1" gutterBottom>
        Top N Products
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      
      <TextField label="Name" variant="outlined" margin="normal" style={{marginBottom:"10px"}} />
      <Router>
            <Routes>
                <Route path="/" element={<ProductList />} />
               <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </Router> 
    </Container>
  );
}

export default App;

