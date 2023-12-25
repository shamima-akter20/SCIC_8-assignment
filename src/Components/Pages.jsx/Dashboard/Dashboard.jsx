// Dashboard.js
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Helmet } from 'react-helmet-async';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
  const tasks = []; // Fetch tasks from Firebase or your backend

  const handleDragEnd = (result) => {
    // Handle task movement in lists
    // Update task status (to-do, ongoing, completed) in your backend
  };

  return (
    <div>
        <Helmet>
            <title>Dashboard | SCC Technovision Inc.</title>
        </Helmet>
      <TaskForm />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="to-do">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2>To-Do</h2>
              <TaskList tasks={tasks.filter((task) => task.status === 'to-do')} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {/* Similar Droppable components for 'ongoing' and 'completed' lists */}
      </DragDropContext>
    </div>
  );
};

export default Dashboard;
