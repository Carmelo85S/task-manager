import { useState } from "react";

const App = () => {

  //declaring task list and input field
  const [tasks, setTasks] = useState<{task:string, completed: boolean}[]>([]);
  const [inputTask, setInputTask] = useState<string>("");

  //setInputTask take the insert value from the input
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  //Prevent empty task, add task to array and clean the input
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputTask.trim() === "") return;
    setTasks([...tasks, {task: inputTask, completed: false }]); 
    setInputTask(""); 
  };

  // Remove specific task
  const handleDelete = (toDelete: string) => {
    setTasks(tasks.filter((task) => task.task !== toDelete));
  };

  // Handle task completion toggle
  const handleCheckboxChange = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <main>
      <h1>Task Manager</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Insert task"
          value={inputTask}
          onChange={handleInput}
          required
        />
        <button type="submit">Submit Task</button>
      </form>

      {/* Render the task list */}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task, index) => (
            <li 
              key={index}
              style={{
                backgroundColor: task.completed ? "green" : "transparent",
                color: task.completed ? "white" : "black",
                padding: "5px",
                marginBottom: "5px",
                borderRadius: "4px",
              }}
            >
              {task.task}
              <button onClick={() => handleDelete(task.task)}>Delete</button>
              <button onClick={() => handleDelete(task.task)}>Edit</button>
              <input 
                type="checkbox" 
                name="completed" 
                id="completed"
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default App;
