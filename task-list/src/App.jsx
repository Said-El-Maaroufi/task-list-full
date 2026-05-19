import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskForm from "./task-manager/taskForm";
import TaskItem from "./task-manager/taskItem";
import TaskList from "./task-manager/taskList";
import Login from "./auth/login";
import Register from "./auth/register";
import Navbar from "./navbar";
import Home from "./homePage";
import Logout from "./auth/logout";
import { useState } from "react";

const App = () => {

  const [token, setToken] = useState(null)
  
  

  return (
      <BrowserRouter>
      <Navbar token={token} />
        <Routes>
          <Route path="/homePage" element={<Home />} />
          <Route path="/ajouter" element={<TaskForm token={token}  />} />
          <Route path="/task" element={<TaskItem />} />
          <Route
            path="/tasks"
            element={<TaskList  />}
          />
          <Route
            path="/login"
            element={<Login setToken={setToken} />}
          />
          <Route
            path="/register"
            element={<Register setToken={setToken} />}
          />
          <Route
            path="/logout"
            element={<Logout  token={token} />}
          />
         

          {/* Optionnel : Une route pour gérer les erreurs 404 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
