import { useState } from "react";

const useTaskState = () => {
  const [tasks, setTasks] = useState<{ task: string; completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [taskEdit, setTaskEdit] = useState<number | null>(null);
  const [editedTaskText, setEditedTaskText] = useState<string>("");

  return {
    tasks,
    setTasks,
    newTask,
    setNewTask,
    taskEdit,
    setTaskEdit,
    editedTaskText,
    setEditedTaskText,
  };
};

export default useTaskState;
