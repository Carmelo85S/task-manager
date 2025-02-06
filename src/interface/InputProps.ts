export interface InputProps {
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    setTasks: React.Dispatch<React.SetStateAction<{task: string; completed: boolean;}[]>>
    tasks: { task: string; completed: boolean }[];
}