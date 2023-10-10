import { useState, useEffect } from 'react';

export default function SubResults(displayItems) {


  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const images = require.context('../public/images', true);
  const displayMax = 12;
  var pages = Array.from({length: Math.ceil(displayItems.length/displayMax)}, (_, i) => i + 1);



  const checkPath = (id) => {
    try {
      images(`./${id}.png`)
      return true;
    }
    catch (err) {
     //the image path was not found
     return false;
    }
  }

  useEffect(() => {
    setItems(displayItems.slice((currentPage-1)*displayMax, (currentPage*displayMax)));
  }, [currentPage, displayItems])


  return (
    <section className="border-solid border-red-300">
      <div className='grid grid-cols-4'>
        {items.map( (item) =>
          <div key={item.id} className='max-h-72 h-full hover:shadow-inner hover:cursor-pointer hover:drop-shadow-lg bg-white rounded-lg mx-4 my-4 shadow-lg' onClick={()=> window.open(item.link, "_blank","noreferer")}>
            <img className='h-4/6 w-auto m-auto py-4' alt={item.title} src={checkPath(item.id) ? images(`./${item.id}.png`) : images(`./defaultCalc.png`)}/>
            <div className='pl-4 pb-0'>
              <p className='my-0'>{item.year}</p>
              <p className='my-0'>{item.title}</p>
            </div>
          </div>
        )}
      </div>
      <div className='flex flex-wrap'>
        {pages.map( (item) =>
          <p className={`mx-3 hover:cursor-pointer hover:text-red-400 ${currentPage === item ? 'font-bold underline' : ''}`} key={item} onClick={()=>setCurrentPage(item)}  >
            {item}
          </p>
        )}
      </div>
    </section>
  )
}