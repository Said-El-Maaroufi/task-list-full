const TaskItem = ({tasks}) => {
  return (
    <div className="container">
      <div className="row justify-content-center ">
      {tasks.map((T) => (

        <div className="col-10 mt-5 p-2 border border-2 d-flex justify-content-between rounded">
          <span className=" align-self-center">{T.description}</span>
          <div className=" d-flex ">
            <div className="btn-group btn-group-sm">
              <button className="btn btn-outline-warning ">edit</button>
              <button className="btn btn-outline-danger">X</button>
            </div>
          </div>
        </div>
        ))}

      </div>
    </div>
  );
};

export default TaskItem;
