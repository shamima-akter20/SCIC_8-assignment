// TaskList.js
import { Draggable } from 'react-beautiful-dnd';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {/* Display task details here */}
              {task.title}
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default TaskList;
