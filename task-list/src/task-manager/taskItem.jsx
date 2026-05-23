const TaskItem = ({tasks}) => {
  return (
      <>
      {tasks.map((T) => (
        
        <div className=" my-3 p-3 border border-2 border-secondary d-flex justify-content-between rounded">
          <span className=" align-self-center">{T.description}</span>
          <div className=" d-flex ">
            <div className="btn-group btn-group">
              <button className="btn btn-outline-info ">info</button>
              <button className="btn btn-outline-warning ">edit</button>
              <button className="btn btn-outline-danger">X</button>
            </div>
          </div>
        </div>
        ))}

        </>
      
  );
};

export default TaskItem;
