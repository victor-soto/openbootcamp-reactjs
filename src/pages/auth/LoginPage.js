import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import LoginForm from "../../components/pure/forms/LoginForm"

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
      <Button variant="contained" onClick={() => navigate('/register')}>Register</Button>
    </div>
  )
}

export default LoginPage
