MyComponents.About = React.createClass({

  render: function() {
    console.log(this.props)
    var spacing = 10;
    return (
     <div className="card lime lighten-5">
      <div className="card-content">
        <div className="row">
          <div className="col s6"><img src="cropped.jpg"/></div>
          <div>
            <h5><strong>Kavya Ravikumar</strong></h5>
            <h6><em>Masters in Computer Science </em></h6>
            <h6>University of Colorado, Boulder</h6>
            <h6>Birth Place: Bangalore, India</h6>
            <h7><a href="https://github.com/kavyaravikumar"><em>Link to my Github</em></a></h7>
          </div>
        </div>
      </div>
    </div>
      
    );
  }

});
