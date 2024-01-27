/* eslint-disable no-unused-vars */
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [{
    name: 'Buy Milk',
    dueDate: '4/10/2023',
  },
  {
    name: 'Buy Eggs',
    dueDate: '4/10/2023',
  },
  {
    name: 'Go to College',
    dueDate: 'right now',
  }
];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App;
