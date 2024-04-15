import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {reset, register} from '../features/auth/authSlice'



// Uso de la función `register` aquí

const Register = () => {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
    password2: ''

  });

  const{name, email, password, password2} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  //funcion onChange para actualizar 
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault()

    if(password!==password2){
      toast.error('Los password no coinciden')
    }else{
      const userData = {
        name, email, password 
      }
      dispatch(register(userData))
    }

  }

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

    if(isSuccess){
      toast.success('Registro exitoso')
      navigate('/login')
    }

    dispatch(reset())

  },[user,isError, isSuccess, message, navigate, dispatch])

  if(isLoading){
    return
  }

  return (
    <>
    <div id="background-image-registro"></div>
    <section className='container mt-6'>
  <div className='row justify-content-center'>
    <div className='col-md-6'>
      <div className='card card-registro'>
        <h4 className='card-header'>
          <FaUser className='icono' /> Registrar Usuario
        </h4>
        <div className='card-body'>
          <p className='card-text'>Por favor crea un usuario</p>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor='name' className='label-formulario'>Nombre</label>
              <input 
                type="text"
                className='form-control'
                id='name'
                name='name'
                value={name}
                placeholder='Por favor escribe tu nombre'
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor='email' className='label-formulario'>Email</label>
              <input 
                type="email"
                className='form-control'
                id='email'
                name='email'
                value={email}
                placeholder='Por favor escribe tu email'
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor='password' className='label-formulario'>Password</label>
              <input 
                type="password"
                className='form-control'
                id='password'
                name='password'
                value={password}
                placeholder='Por favor escribe tu password'
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor='password2' className='label-formulario'>Confirmar Password</label>
              <input 
                type="password"
                className='form-control'
                id='password2'
                name='password2'
                value={password2}
                placeholder='Por favor confirma tu password'
                onChange={onChange}
              />
            </div>
            <button type='submit' className='btn btn-primary btn-block'>
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Register
