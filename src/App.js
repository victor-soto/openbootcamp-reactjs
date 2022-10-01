import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/taskList.component';
import ContactListComponent from './components/container/contactList.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TaskListComponent />
        <ContactListComponent />
     </header>
    </div>
  );
}

export default App;
