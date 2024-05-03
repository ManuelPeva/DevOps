import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { fetchProducts } from '../services/api';
import { toast } from 'react-toastify';
import Marca from '../components/Marcas'

const ProductList = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return; // Importante para prevenir la ejecución posterior sin autenticación
    }

    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    loadProducts();
  }, [user, navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  function handleBuyProduct(productId) {
    toast.success(`Producto ${productId} añadido al carrito`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    // Aquí puedes agregar lógica para realmente añadir al carrito
}
  

  return (
    <>
      <div>
        <h1 className='title-products'>ECOMERCE <br /><span>[SIEMPRE TU MEJOR OPCIÓN DE COMPRA]</span></h1>
        <hr className='underline'/>
        <Marca/>
        <div className='card-container'>
          {products.map(product => (
            <div key={product.id} className='product-card'>
              <img src={product.image} alt={product.title} className='product-image'/>
              <h2 className='product-title'>{product.title}</h2>
              <p className='product-price'>${product.price}</p>
              <button 
              className='buy-button' onClick={()=> handleBuyProduct(product.id)}>
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
