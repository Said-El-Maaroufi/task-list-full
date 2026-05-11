import TaskItem from "./taskItem";

const TaskList = ({user, token}) => {
    console.log(token)
    return ( <div className="row m-3">
         <h1>hello {user ? user.name : 'invité'}</h1>
    </div> );
}

export default TaskList;