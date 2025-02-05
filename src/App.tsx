import { useState } from "react";
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState<{ task: string, completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [taskEdit, setTaskEdit] = useState<number | null>(null);
  const [editedTaskText, setEditedTaskText] = useState<string>("");

  const handleNewTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([...tasks, { task: newTask, completed: false }]);
    setNewTask("");
  };

  const removeTask = (taskToRemove: string) => {
    setTasks(tasks.filter(task => task.task !== taskToRemove));
  };

  const startEditingTask = (index: number) => {
    setTaskEdit(index);
    setEditedTaskText(tasks[index].task);
  };

  const saveEditedTask = () => {
    if (editedTaskText.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[taskEdit!].task = editedTaskText;
    setTasks(updatedTasks);
    setTaskEdit(null);
    setEditedTaskText("");
  };

  const toggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <main>
      <div className="title-container">
        <h1 className="heading">Lazy List</h1>
        <p className="quote">Get things done... or at least pretend to</p>
      </div>
      
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

      <div>
        {tasks.length > 0 && (
          <ul className="task-list-container">
            {tasks.map((task, index) => (
              <li
                className="task"
                key={index}
                style={{
                  backgroundColor: task.completed ? "green" : "transparent",
                  color: task.completed ? "white" : "black",
                }}
              >
                {taskEdit === index ? (
                  <div>
                    <input
                      type="text"
                      value={editedTaskText}
                      onChange={(e) => setEditedTaskText(e.target.value)}
                    />
                  </div>
                ) : (
                  <span>{task.task}</span>
                )}

                <div className="btn-container">
                  <button onClick={() => startEditingTask(index)}>Edit</button>
                  <button onClick={saveEditedTask}>Save</button>
                  <button onClick={() => removeTask(task.task)}>Delete</button>

                  <div className="checkbox-container">
                    <label htmlFor="checkbox">Done</label>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(index)}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default App;
