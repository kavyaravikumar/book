MyComponents.City = React.createClass({

  render: function() {
    console.log("City: "+this.props.city.name)
    var imgURL = 'images/'+this.props.city.currently.icon+'.png'
    return (
      <div className="col s6">
        <div className="card blue lighten-4">
          <div className="card-content">
            <div className="row">
              <div className="col s9">
                <div><strong>Name:</strong> <em>{(this.props.city.name).toUpperCase()}</em></div>
                <div><strong>Summary:</strong> <em>{(this.props.city.currently.summary)}</em></div>
                <div><strong>Temperature:</strong> <em>{(this.props.city.currently.apparentTemperature)} &#x2109;</em></div>
                <div><strong>Precipitation:</strong> <em>{(this.props.city.currently.precipProbability)}</em></div>
                <div><strong>Wind Speed:</strong> <em>{(this.props.city.currently.windSpeed)}</em></div>
                <div><strong>Weekly Summary:</strong> <em>{(this.props.city.daily.summary)}</em></div>
              </div>
              <div><img src={imgURL} width="100"/></div>
            </div>
          </div>
        </div>
      </div>

    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="row">
        {cityElements}     
      </div>
    );
  }
});
