import { useState, useEffect } from 'react';

import { calculationData } from './data/calculationData.js';

export default function Results( {building='', equipment='', level='all', floor=true, wall=true, wallAndFloor=true} ) {
  const images = require.context('../public/images', true);
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

  //return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;

  console.log({calculationData});
  return (
    <section className="border-solid border-red-300 border 2">
      <div className='grid grid-cols-4'>
        {results.map( (item) =>
          <div key={item.id} className='h-auto'>
            <p>{item.title}</p>
            <img alt={item.title} src={images(`./${item.id}.png`)}/>
          </div>
        )}
      </div>
    </section>
  )
}