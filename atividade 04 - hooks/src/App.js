import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Task({ title, completed }) {
  return (
    <li>
      {title} {completed && <span>(Concluída)</span>}
    </li>
  );
}

function useTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, completed) => {
    const newTask = {
      id: Date.now(),
      title,
      completed,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return { tasks, addTask };
}

function TaskList() {
  const { tasks, addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const completed = e.target.completed.checked;
    addTask(title, completed);
    e.target.reset();
  };

  useEffect(() => {
    console.log('Componente TaskList montado');
  }, []);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} title={task.title} completed={task.completed} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Título da Tarefa" required />
        <label>
          <input type="checkbox" name="completed" /> Concluída
        </label>
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>Sobre</h1>
      <p>Esta é uma aplicação simples para gerenciar suas tarefas pessoais.</p>
      <Link to="/">Voltar para a lista de tarefas</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
