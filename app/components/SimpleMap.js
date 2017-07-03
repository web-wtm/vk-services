import React from 'react';
import GoogleMapReact from 'google-map-react';
import api from '../utils/api'


const AnyReactComponent = ({ text }) => (
    <div style={{
        position: 'relative', color: 'white', background: 'red',
        height: 40, width: 60, top: -20, left: -30,
    }}>
        {text}
    </div>
);

const SimpleMap = ({ center, zoom, onClick }) => {
    return (
        <GoogleMapReact
            defaultCenter={center}
            defaultZoom={zoom}
            onClick={onClick}
        />
    )
}
SimpleMap.defaultProps = {
    center: {lat: 53.95, lng: 30.33},
    zoom: 11
}

export default SimpleMap;
// export default class SimpleMap extends React.Component {
//   constructor(props) {
//       super(props)
//       this.onClick = this.onClick.bind(this);
//   }
//   onClick (obj){
//       console.log(obj.lat, obj.lng)
//       api.photoSearch(obj.lat, obj.lng, 6000)
//   } 

//   static defaultProps = {
//     center: {lat: 53.95, lng: 30.33},
//     zoom: 11
//   };

//   render() {
//     return (
//        <GoogleMapReact
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//         onClick={this.onClick}
//       >
//         <AnyReactComponent 
//           lat={53.955413} 
//           lng={30.337844} 
//           text={'Kreyser Avrora'} 
//         />
//       </GoogleMapReact>
//     );
//   }
// }
// map api key
// AIzaSyA4mloYb0KQxeWdjonjkedhXjYZHtd1zfA