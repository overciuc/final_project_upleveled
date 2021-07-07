import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
// eslint-disable-next-line import/no-unresolved
import 'leaflet-defaulticon-compatibility';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Coordinates } from '../util/types';

const Map = (props: any) => {
  return (
    <MapContainer
      center={[48.2042154830387, 16.368015018501982]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: 800, width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/*
      <Marker position={[48.2042154830387, 16.368015018501982]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>*/}
      {props.allReviews.map((review: any) => {
        //console.log(review);
        return (
          <Marker key={`review-${review.id}`} position={review.coordinates}>
            <Popup>{review.district}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
