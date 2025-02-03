import { useState } from "react";
import './index.css';
const App = () => {

  // Declaring task list and input field
  const [tasks, setTasks] = useState<{ task: string, completed: boolean }[]>([]);
  const [inputTask, setInputTask] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingTask, setEditingTask] = useState<string>("");

  // Handle input for new task
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  // Prevent empty task, add task to array, and clean the input
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputTask.trim() === "") return;
    setTasks([...tasks, { task: inputTask, completed: false }]);
    setInputTask("");
  };

  // Remove specific task
  const handleDelete = (toDelete: string) => {
    setTasks(tasks.filter((task) => task.task !== toDelete));
  };

  // Handle task edit mode
  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditingTask(tasks[index].task);
  };

  // Save the edited task
  const handleSaveEdit = () => {
    if (editingTask.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex!].task = editingTask;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingTask("");
  };

  // Handle task completion toggle
  const handleCheckboxChange = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <main>
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
              {editingIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editingTask}
                    onChange={(e) => setEditingTask(e.target.value)}
                  />
                  <button onClick={handleSaveEdit}>Save</button>
                </div>
              ) : (
                <span>{task.task}</span>
              )}
              <button onClick={() => handleDelete(task.task)}>Delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <input
                type="checkbox"
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
