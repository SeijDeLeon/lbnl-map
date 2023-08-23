import Results from './Results.jsx';

import { useState } from 'react';

export default function Search( {building, setBuilding} ) {

  const searchIcon = <svg className='self-center w-auto h-3/4' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path></svg>



  return(
    <div className='border-red-500 border-solid border-2'>
      <div className='flex justify-center'>
        <search className='flex h-8'>
          {searchIcon}
          <div className='relative w-64'>
            <p className={`absolute z-0 top-0 left-0 w-full h-full border-red-500 border-solid border-2 w-auto ${building ? 'text-transparent' : 'text-slate-300'}`}>Search Building #</p>
            <input className={`absolute z-10 top-0 left-0 w-full h-full border-red-500 border-solid border-2 w-auto text-slate-700 ${building ? 'opacity-100' : 'opacity-25'}`} name='buildingSearch' value={building} onChange={e => setBuilding(e.target.value)} />
          </div>
        </search>
      </div>
      <Results />
    </div>
  )
}