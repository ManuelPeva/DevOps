import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Header from './components/Header'
import ProductList from './components/ProductList'



function App(){
    
    return(
        <>
        <Router>
            <div className="container">
                <Header/> 
                <Routes>
                <Route path="/" element={<ProductList/> }/>
                <Route path="/login" element={<Login/> }/>
                <Route path="/register" element={<Register/> }>
                </Route>
                </Routes>
            </div>
        </Router>
        <ToastContainer/>
        </>
    )
}

export default App