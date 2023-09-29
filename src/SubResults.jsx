import { useState, useEffect } from 'react';

export default function SubResults(displayItems) {

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const images = require.context('../public/images', true);
  const displayMax = 6;
  var pages = Array.from({length: Math.ceil(displayItems.length/displayMax)}, (_, i) => i + 1);


  const checkPath = (id) => {
    try {
      images(`./${id}.png`)
    }
    catch (err) {
     //the image path was not found
    }
  }

  useEffect(() => {

    setItems(displayItems.slice((currentPage-1)*displayMax, (currentPage*displayMax)));
    console.log('in useEffect with currentPage: '+currentPage);

  }, [currentPage, displayItems])


  return (
    <section className="border-solid border-red-300 border 2">
      <div className='grid grid-cols-4'>
        {items.map( (item) =>
          <div key={item.id} className='h-auto hover:cursor-pointer'>
            <p>{item.title}</p>
            <img alt={item.title} src={checkPath(item.id) ? images(`./${item.id}.png`) : images(`./defaultCalc.png`)}/>
          </div>
        )}
      </div>
      <div className='flex'>
        {pages.map( (item) =>
          <p key={item} onClick={()=>setCurrentPage(item)} className='hover:cursor-pointer' >
            {item}
          </p>
        )}
      </div>
    </section>
  )
}