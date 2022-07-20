import './App.css';
import DisplayTodos from './Components/DisplayTodos';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App">
      <Todo />
      <DisplayTodos/>
    </div>
  );
}

export default App;
