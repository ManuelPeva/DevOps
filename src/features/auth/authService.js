import axios from 'axios';


const API_URL = 'https://courageous-duck-top-coat.cyclic.app/api/users/'

//const API_URL = 'http://localhost:5173/api/users/'



//creamos la peticion al backend para crear un usuario
const register = async(userData) => {
    const response = await axios.post(API_URL, userData)

    return response.data 
}

//creamos la peticion para logear un usuario
const login = async(userData) => {
    const response = await axios.post(API_URL+'login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Logout a un usuario
const logout = () => {
    localStorage.removeItem('user')
}


const authService = {
    register,
    login,
    logout
}

export default authService