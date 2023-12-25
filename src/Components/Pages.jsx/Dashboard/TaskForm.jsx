// TaskForm.js

import { useForm } from 'react-hook-form';

const TaskForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle task creation using data.title, data.description, etc.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} placeholder="Task Title" />
      <textarea {...register('description')} placeholder="Task Description" />
      {/* Add other input fields (deadline, priority, etc.) as needed */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
