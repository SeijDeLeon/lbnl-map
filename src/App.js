import './App.css';

import Map from './Map.jsx';
import Search from './Search.jsx';

import {useState} from 'react';

import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';
import {Marker, Popup} from 'leaflet';
import lbnlGeoJson from './data/LBNL.json';


function App() {

  const [building, setBuilding] = useState('');
  return (
    <main className='block '>
      <header className='w-full'>
        <h1 className='text-center text-cyan-800'>LBNL Map</h1>
      </header>
      <Map building={building} setBuilding={setBuilding}/>
      <Search building={building} setBuilding={setBuilding}/>
    </main>
  );
}

export default App;
