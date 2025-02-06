const FormInput = ({ newTask, setNewTask, setTasks, tasks }: {
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    setTasks: React.Dispatch<React.SetStateAction<{
        task: string;
        completed: boolean;
    }[]>>
    tasks: { task: string; completed: boolean }[];
  }) => {
  
    const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (newTask.trim() === "") return;
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask("");
    };
  
    const handleNewTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewTask(e.target.value);
    };
  
    return (
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Insert task"
          value={newTask}
          onChange={handleNewTaskChange}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    );
  };
  
  export default FormInput;
  