import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import './CreateMap.css';

const mapStyles = {
  width: '100%',
  height: '30%',
  
};


class Demo1 extends Component {
  constructor() {

    super();
    this.state = {
      name: "React",
      latitude: 0,
      longitude:0
    };
  }

  componentDidMount() {
   navigator.geolocation.getCurrentPosition( (position) =>  {
        const coords = position.coords;
        console.log('latitude ' , coords.latitude);
        console.log('longitude ' , coords.longitude);
        this.setState ({
          latitude : coords.latitude,
          longitude: coords.longitude
        })
   })

  }

  render() {
    return (
      <div className="map">
        
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          center={{
            lat: this.state.latitude,
            lng: this.state.longitude
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'Pune'}
          position={{lat: this.state.latitude, lng: this.state.longitude}}
        />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAgpJNu0t5LpHih5TmtiQBq_MyQJAk26yY'
})(Demo1);