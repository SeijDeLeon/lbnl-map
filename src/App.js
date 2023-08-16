import './App.css';

import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import {Marker, Popup} from 'leaflet';



function App() {
  return (
    <main className='block '>
      <header className='w-full'>
        <h1 className='text-center text-cyan-800'>LBNL Map</h1>
      </header>
      <div className='h-96'>
        <MapContainer className='h-96' center={[37.8765, -122.246]} zoom={16.5} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

        </MapContainer>
      </div>
    </main>
  );
}

export default App;
