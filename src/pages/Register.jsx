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
    <section className='heading'>
      <h4><FaUser /> Registrar Usuario</h4>
      <p>Por favor crea un usuario</p>
    </section>

    <section className='form' >
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input 
          type="text"
          className='form-control'
          id='name'
          name='name'
          value={name}
          placeholder='por favor escriba su nombre'
          onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input 
          type="email"
          className='form-control'
          id='email'
          name='email'
          value={email}
          placeholder='por favor escriba su email'
          onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input 
          type="password"
          className='form-control'
          id='pasword'
          name='password'
          value={password}
          placeholder='por favor escriba tu password'
          onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input 
          type="password"
          className='form-control'
          id='pasword2'
          name='password2'
          value={password2}
          placeholder='por favor confirma tu password'
          onChange={onChange}
          />
        </div>
        <div className="form-group">
          <button type='submit' className='btn btn-block'>
            Crear cuenta
          </button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Register
