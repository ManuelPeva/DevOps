import { FaSignInAlt } from 'react-icons/fa'; // Corregir la importación del icono
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { reset, login } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password
    };

    dispatch(login(userData));
  };

  return (
    <>
    <div id="background-image"></div>
      <section className='container mt-5'>
  <div className='row justify-content-center'>
    <div className='col-md-6'>
      <div className='card card-login'>
        <h4 className='card-header' >
          <FaSignInAlt  className='icono'/> Acceder a la App
        </h4>
        <div className='card-body'>
          <p className='card-text'>Por favor escribe tus credenciales</p>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor='email'>Email</label>
              <input 
                type="email"
                className='form-control'
                id='email'
                name='email'
                value={email}
                placeholder='Escribe tu email'
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor='password'>Password</label>
              <input 
                type="password"
                className='form-control'
                id='password'
                name='password'
                value={password}
                placeholder='Escribe tu password'
                onChange={onChange}
              />
            </div>
            <button type='submit' className='btn btn-primary btn-block'>
              Acceder
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


      {isLoading && <Spinner/>} {/* Retorno condicional del spinner */}
      
    </>
  );
}

export default Login;
