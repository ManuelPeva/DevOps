
const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    if(!response.ok){
        throw new Error('Failed to fetch productos no fue posible cargar los productos')
    }

    return response.json();
};