import Results from './Results.jsx';

import { useState } from 'react';
import { useDeferredValue } from 'react';

export default function Search( {building, setBuilding} ) {

  const searchIcon = <svg className='self-center w-auto h-3/4' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path></svg>

  const chevronDown = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="self-center bi bi-chevron-compact-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/> </svg>

  const chevronUp = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-up" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/> </svg>


  const deferredBuilding = useDeferredValue(building); //ensures that keystrokes are prioritized over searches

  const [wall, setWall] = useState(true);
  const [floor, setFloor] = useState(true);
  const [wallAndFloor, setWallAndFloor] = useState(true);
  const [equipment, setEquipment] = useState('');
  const [level, setLevel] = useState('all');
  const [equipmentDisplay, setEquipmentDisplay] = useState(false);

  //equipment names must perfectly match (without spaces) the columns in the original Excel data (and corresponding JSON file) for the search to work
  const equipmentList =[
      'TV',
      'Whiteboard',
      'Fridge',
      'Table',
      'Optical Table',
      'Counter Top Eqp',
      'Cabinet',
      'Shelving',
      'Scientific',
      'Flam Cabinet',
      'Wire Shelf',
      'Glove Box',
      'Biosafety Cabinet',
      'Incubator',
      'Dewar',
      'Gas Cylinder',
      'Crane',
      'Unistrut Frame',
      'Rack',
      'Electrical',
      'Industrial',
      'Guardrail',
      'Floor Load',
      'Distributed System',
      'Roof Equipment',
      'Fall Protection',
      'Building'
  ];

  return(
    <div className=''>
      <div className='flex justify-center'>
        <div className='flex h-6 my-6'>
          {searchIcon} &nbsp;
          <div className='relative w-36'>
            <p className={`absolute z-0 top-0 left-4 w-full h-full  w-auto ${building ? 'text-transparent' : 'text-slate-300'}`}>Search Building #</p>
            <input className={`absolute z-10 top-0 left-2 w-full h-full border-solid border-2 border-slate-500 rounded-md w-auto text-slate-700 ${building ? 'opacity-100' : 'opacity-25'}`} name='buildingSearch' value={building} onChange={e => setBuilding(e.target.value)} />
          </div>
        </div>
      </div>
      <section className='border-2 border-solid border-slate-300 rounded-lg block bg-slate-50 w-4/5 max-w-7xl m-auto'>
        <h2 className='pl-8 pt-4 text-lg font-medium text-sky-900'>Search for Structural Calculations</h2>
        <div className='flex justify-around my-4'>
          <button className='flex items-center text-sky-900 bg-white rounded-md px-4 font-medium border-2 border-slate-200' onClick={()=> setEquipmentDisplay(!equipmentDisplay)}> Equipment Type &nbsp; {equipmentDisplay ? chevronUp : chevronDown}</button>
          <label className='text-sky-900 font-medium bg-slate-200 rounded-md pl-2'>
            {`Level `}
            <select className='h-full rounded-r-md border-2 border-slate-200' onChange={(e) => setLevel(e.target.value)}>
              <option value='all'>&nbsp; All</option>
              <option value='0'>0</option>
              <option value='1'>1st</option>
              <option value='2'>2nd</option>
              <option value='3'>3rd</option>
              <option value='4'>4th</option>
              <option value='5'>5th</option>
              <option value='6'>6th</option>
              <option value='r'>Roof</option>
              <option value='outside'>Outside</option>
            </select>
          </label>
          <div className='flex'>
            <p className='text-sky-900 font-medium mr-4'>Attachment:</p>
            <label className='text-sky-900 font-medium mx-4'><input type='checkbox' defaultChecked={true} name='wall' onChange={()=> setWall(!wall)}/> Wall </label>
            <label className='text-sky-900 font-medium mx-4'> <input type='checkbox' defaultChecked={true} name='floor' onChange={()=> setFloor(!floor)}/> Floor</label>
            <label className='text-sky-900 font-medium mx-4'> <input type='checkbox' defaultChecked={true} name='wallAndFloor' onChange={()=> setWallAndFloor(!wallAndFloor)}/> Wall & Floor</label>

          </div>
        </div>
        <div className={`${equipmentDisplay ? '' : 'hidden'} m-auto bg-white w-11/12`}>
          <div className='px-4 py-4 m-auto grid grid-cols-5 text-slate-600 font-medium'>
            {equipmentList.map(item =>
              <p key={item} className={`my-1 hover:cursor-pointer ${equipment === item ? 'bg-blue-300 hover:bg-blue-100' : 'hover:bg-blue-200'}`} onClick={() => item === equipment ? setEquipment('') : setEquipment(item)}>{item} </p>
            )}
          </div>
          <p className='flex items-center justify-center text-slate-600 font-medium hover:cursor-pointer' onClick={()=> setEquipmentDisplay(!equipmentDisplay)}>Hide &nbsp; {chevronUp}</p>
        </div>
        <Results building={deferredBuilding} equipment={equipment.replace(/\s+/g, '')} level={level} floor={floor} wall={wall} wallAndFloor={wallAndFloor}/>
      </section>
    </div>
  )
}