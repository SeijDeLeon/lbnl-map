import { useState, useEffect } from 'react';

import { calculationData } from './data/calculationData.js';

export default function Results( {building='', equipment='', level='all', floor=true, wall=true, wallAndFloor=true} ) {
  //returns the results based on the search parameters

  const [calculation, setCalculation] = useState('');
  const [results, setResults] = useState([]);


  useEffect(() => {
    //perform search
    setResults(() => {
      const filterItem = (item) => {
        //building is '' as default
        //equipment is '' as default
        //level is 'all' as default
        //floor, wall, wallAndFloor are true as default
        if ( (!building || item.building === building) && (level === 'all' || item.level === level) && ( (item.floor && floor) || (item.wall && wall) || (item.wallAndFloor && wallAndFloor)) ) {
          return true;
        }
      }
      return(
        calculationData.filter( filterItem )
        )
      });
  }, [building])

  console.log({calculationData});
  return (
    <section className="border-solid border-red-300 border 2">
      <div>results</div>
      {results.map( (item) =>
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      )}
    </section>
  )
}