import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';
import {Marker, Popup} from 'leaflet';
import lbnlGeoJson from './data/LBNL.json';

export default function Map( {building, setBuilding} ) {
  const onEachFeature = (feature, layer) => {
    layer.on('click', function (e) {
      console.log(feature.properties.Name);
      setBuilding(feature.properties.Name);
    })
  }

  const layerStyle = (geoJsonFeature) => {
    return {
      weight:1
    }
  }
  return (
    <div className='h-96 max-w-7xl w-4/5 m-auto'>
        <MapContainer className='h-96' center={[37.8765, -122.246]} zoom={16} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={lbnlGeoJson} onEachFeature={onEachFeature} style={layerStyle}></GeoJSON>
        </MapContainer>
      </div>
  )
}