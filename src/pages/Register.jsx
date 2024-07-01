import axios from "axios"
import ButtonLogos from "../components/ButtonLogos"
import Inputs from "../components/Inputs"
import Spam from "../components/Spam"
import ButtonRegister from "../components/register/ButtonRegister"
import LinkLogin from "../components/register/LinkLogin"
import { useNavigate } from "react-router-dom"


const Register = () => {

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
    }
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', data)
      alert(response.data.message)
      navigate('/login')
      console.log(response)
    } catch (error) {
      console.log('Error during registration:', error)
      alert(error.response.data.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-3xl">
        <img className="mx-auto w-20" src="/logo.png" alt="Logo" />
        <h2 className="mt-6 text-2xl font-medium text-gray-900">
          Join thousands of learners from around the world
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Master web development by making real-life projects. There are multiple paths for you to choose.
        </p>
        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          <Inputs />
          <ButtonRegister />
        </form>
        <Spam />
        <ButtonLogos />
        <LinkLogin />
      </div>
    </div>
  )
}

export default Register
