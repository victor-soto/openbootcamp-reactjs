import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import RegisterForm from "../../components/pure/forms/RegisterForm"

const RegisterPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Register Page</h1>
      <RegisterForm />
      <Button variant='contained' color='success' onClick={() => navigate('/login')}>Login</Button>
    </div>
  )
}

export default RegisterPage
