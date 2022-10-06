import logo from './logo.svg';
import './App.css';
// import TaskListComponent from './components/container/taskList.component';
// import ContactListComponent from './components/container/contactList.component';
import ClockComponent from './components/pure/clock.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent /> */}
        {/* <ContactListComponent /> */}
        <ClockComponent />
     </header>
    </div>
  );
}

export default App;
