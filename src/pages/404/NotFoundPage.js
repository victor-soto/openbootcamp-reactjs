import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  const navigateTo = (path) => {
      navigate(path);
  }

  return (
      <div>
          <h1>404 - Page Not Found</h1>
          <button onClick={() => navigateTo('/')}>
              Go back to home
          </button>
      </div>
  );
}

export default NotFoundPage
