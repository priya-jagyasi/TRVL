import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import './CreateMap.css';




class Demo1 extends Component {
  constructor() {

    super();
    this.state = {
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
      // <div className='fixheight'>
      <div className="map">
        
        <Map
          google={this.props.google}
          zoom={14}
          containerStyle={{height: '350px'}}
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
        <Marker
          onClick={this.onMarkerClick}
          name={'Pune'}
          position={{lat: '22.0898417', lng: '82.1529226'}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Pune'}
          position={{lat: '22.0717948', lng: '82.1474219'}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Pune'}
          position={{lat: '22.0694197', lng: '82.1356419'}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Pune'}
          position={{lat: '22.0696693', lng: '82.1829886'}}
        />
        </Map>
       </div>
       
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAgpJNu0t5LpHih5TmtiQBq_MyQJAk26yY'
})(Demo1);