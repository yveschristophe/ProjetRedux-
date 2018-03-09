import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


class CarteLocale extends Component {

state = {
  	lat:15.887037,
    long:-61.313526, 
    zoom: 30
  }

  render() {
  	const position = [this.state.lat, this.state.long]
    return (
       <div className="containMap">
       	<Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
               Restaurant BoonkGan
            </span>
          </Popup>
        </Marker>
      </Map> 
       </div>
    );
  }
}

export default CarteLocale;
