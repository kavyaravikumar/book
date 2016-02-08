MyComponents.Task = React.createClass({

  render: function() {
    console.log("Completed: "+this.props.task.completed)
    var imgURL;
    if (JSON.stringify(this.props.task.completed) == "true") {
      imgURL = 'images/true.png'
    }
    else {
      imgURL = 'images/false.png' 
    }
    return (
      <div className="col s4">
        <div className="card lime lighten-5">
          <div className="card-content">
            <div><strong>Title:</strong> {(this.props.task.title)}</div>
            <div><strong>Deadline:</strong> {(this.props.task.deadline)}</div>
            <div><strong>Priority:</strong> {(this.props.task.priority)}</div>
            <div><strong>Type:</strong> {(this.props.task.type)}</div>
            <div><strong>Completed:</strong> <img src={imgURL} width="30" height="20"/></div>
          </div>
         </div>
      </div>
    );
  }

});

MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (
      <div className="row">
        {taskElements}     
      </div>
    );
  }
});
