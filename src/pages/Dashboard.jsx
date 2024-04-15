/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // O puedes mostrar un mensaje de redirección o carga aquí
  }

  return (
    <div className='dashboard'>
      <h1></h1>
      <p></p>
    </div>
  );
};

export default Dashboard;
