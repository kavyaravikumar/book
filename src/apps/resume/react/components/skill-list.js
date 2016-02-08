MyComponents.Skill = React.createClass({

  render: function() {
    console.log("sk: "+this.props)
    var imgURL = 'images/'+this.props.skill+'.png'
    return (
      <div className="col s4">
          <img src={imgURL} width="100" height="100"/>
      </div>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card teal lighten-4">
          <div className="card-content">
              <div className="row">

                {skillElements}
            </div>
            </div>

      </div>
    );
  }
});
