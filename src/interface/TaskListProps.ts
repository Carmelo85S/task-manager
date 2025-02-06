export interface  TaskListProps {
    tasks: { task: string; completed: boolean }[];
    setTasks: React.Dispatch<React.SetStateAction<{ task: string; completed: boolean }[]>>;
    taskEdit: number | null;
    setTaskEdit: React.Dispatch<React.SetStateAction<number | null>>;
    editedTaskText: string;
    setEditedTaskText: React.Dispatch<React.SetStateAction<string>>
}