MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper">
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
        <a href="/apps/resume/react" className="brand-logo center">Kavya Ravikumar</a>
        <ul id="nav-mobile" className="right">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#tasks-heading">Tasks</a></li>
          <li><a href="#cities-heading">Cities</a></li>          
        </ul>
        </div>
      </nav>
    );
  }
});


