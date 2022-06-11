import React from "react";
import './App.css';
import Header from "./Components/header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import TodoList from "./Components/todos/TodoList";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Header />
        </nav>
        <div>
          <Routes>
            <Route path="/todos" element={<TodoList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
