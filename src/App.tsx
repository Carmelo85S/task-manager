import './index.css';
import FormInput from "./components/FormInput";
import Title from "./components/Title";
import TaskList from "./components/TaskList";
import useTaskState from "./hooks/useState";

const App = () => {
  const {  
      tasks,
      setTasks,
      newTask,
      setNewTask,
      taskEdit,
      setTaskEdit,
      editedTaskText,
      setEditedTaskText
  } = useTaskState();

  return (
    <main>

      <Title 
        title="Lazy List"
        quote="Boring thigs to do"
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
