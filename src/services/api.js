import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust based on your backend setup

export const fetchProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
};

export const fetchCategories = async () => {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
};

export const fetchCompanies = async () => {
    const response = await axios.get(`${API_BASE_URL}/companies`);
    return response.data;
};

export const fetchProductById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
};
