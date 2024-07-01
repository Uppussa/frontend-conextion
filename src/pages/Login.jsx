import ButtonLogos from '../components/ButtonLogos'
import LinkRegister from '../components/login/LinkRegister'
import Inputs from '../components/Inputs'
import ButtonLogin from '../components/login/ButtonLogin'
import Spam from '../components/Spam'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {AuthContext} from '../context/UserContext'
import images from '../assets/images.png'




const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      try {
        await login(email, password);
        navigate('/dashboard');
      } catch (error) {
        console.error('Error during login:', error);
      }
    };
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-3xl">
                <img className="mx-auto w-20" src={images} alt="Logo" />
                <h2 className="mt-6 text-2xl font-medium text-gray-900">
                    Login
                </h2>
                <form onSubmit={handleLogin} className="mt-8 space-y-6">
                    <Inputs />
                    <ButtonLogin />
                </form>
                <Spam />
                <ButtonLogos />
                <LinkRegister />
            </div>
        </div>
    )
}

export default Login
