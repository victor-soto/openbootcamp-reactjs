import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import JokesPage from './pages/jokes/JokesPage';
import TasksPage from './pages/tasks/TasksPage';

function App() {
  let loggedIn = true

  return (
    <Router>
      <Routes>
        <Route path='/' index element={ loggedIn ? (<Navigate to='/tasks' replace />) : (<LoginPage />)} />
        <Route path='/tasks' element={ loggedIn ? <TasksPage /> : <Navigate to='/login' /> } />
        <Route path='/login' element={<LoginPage />} />
        <Route exact path='/register' element={ <RegisterPage /> } />
        <Route path='/joke' element= { <JokesPage /> } />
        <Route path='*' element={ <NotFoundPage /> }/>
     </Routes>
    </Router>
  );
}

export default App
