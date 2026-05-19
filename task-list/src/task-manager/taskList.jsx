import TaskItem from "./taskItem";

const TaskList = ({tasks}) => {
    return ( <div className="row m-3">
         <TaskItem user={tasks}/>
    </div> );
}

export default TaskList;