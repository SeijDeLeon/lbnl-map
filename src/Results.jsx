import { useState, useEffect } from 'react';
import { calculationData } from './data/calculationData.js';
import SubResults from './SubResults.jsx';
calculationData.reverse();


export default function Results( {building='', equipment='', level='all', floor=true, wall=true, wallAndFloor=true} ) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    //perform search
    setResults(() => {
      const filterItem = (item) => {
        //building, equipment, level are '' as default. level is 'all' as default.floor, wall, wallAndFloor are true as default
        if ( !building || item.building === building) {
          if ( (level === 'all' || item.level === level) && ( (item.floor && floor) || (item.wall && wall) || (item.wallAndFloor && wallAndFloor)) ) {
            if (!equipment || item[equipment] === true) {
              return true;
            }
          }
        }
      }
      return(
        calculationData.filter( filterItem )
        )
    });
  }, [building, equipment, level, floor, wall, wallAndFloor])


  return (
   SubResults(results)
  )
}