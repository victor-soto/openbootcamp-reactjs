import './App.css';
// import SquareContainer from './components/container/SquareContainer';
// import ContactList from './components/container/ContactList';
import TaskList from './components/container/TaskList'

function App() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      {/* <ContactList /> */}
      {/* <SquareContainer /> */}
      <TaskList />
    </div>
  );
}

export default App;
