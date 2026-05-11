import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskForm from "./task-manager/taskForm";
import TaskItem from "./task-manager/taskItem";
import TaskList from "./task-manager/taskList";
import Login from "./auth/login";
import Register from "./auth/register";
import { useState } from "react";
import Navbar from "./navbar";

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/ajouter" element={<TaskForm />} />
          <Route path="/task" element={<TaskItem />} />
          <Route
            path="/tasks"
            element={<TaskList user={user} token={token} />}
          />
          <Route
            path="/login"
            element={<Login setUser={setUser} setToken={setToken} />}
          />
          <Route
            path="/register"
            element={<Register setUser={setUser} setToken={setToken} />}
          />

          {/* Optionnel : Une route pour gérer les erreurs 404 */}
          <Route path="*" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
