import { useState } from "react";

const App = () => {

  //declaring task list and input field
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputTask, setInputTask] = useState<string>("");

  //setInputTask take the insert value from the input
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  //Prevent empty task, add task to array and clean the input
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputTask.trim() === "") return;
    setTasks([...tasks, inputTask]); 
    setInputTask(""); 
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
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default App;
