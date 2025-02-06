import { useState } from "react";
import './index.css';
import FormInput from "./components/FormInput";
import Title from "./components/Title";
import TaskList from "./components/TaskList";

const App = () => {

  const [tasks, setTasks] = useState<{ task: string, completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [taskEdit, setTaskEdit] = useState<number | null>(null);
  const [editedTaskText, setEditedTaskText] = useState<string>("");

  return (
    <main>

      <Title 
        title="Lazy List"
        quote="Or at least pretend to"
      />
      
      <FormInput 
        newTask={newTask} 
        setNewTask={setNewTask}
        tasks={tasks} 
        setTasks={setTasks}
      />

      <TaskList 
        tasks={tasks}
        setTasks={setTasks}
        taskEdit={taskEdit}
        setTaskEdit={setTaskEdit}
        editedTaskText={editedTaskText}
        setEditedTaskText={setEditedTaskText}
      />
    </main>
  );
};

export default App;
