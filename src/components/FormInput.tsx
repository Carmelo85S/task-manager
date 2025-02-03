import React from 'react'


const FormInput = (setTasks, inputTask, setInputTask) => {

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

    return (
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
    )
}

export default FormInput
