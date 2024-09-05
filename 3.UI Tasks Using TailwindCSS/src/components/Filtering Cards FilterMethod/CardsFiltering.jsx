import React, { useState } from 'react'

const CardsFiltering = () => {
  const [selectedCards, setSelectedCategory] = useState('all');
  const cardsData = [
    {
      id: 1,
      category: 'mobile',
      title: 'Samsung',
    }, {
      id: 2,
      category: 'mobile',
      title: 'Lenove',
    }, {
      id: 3,
      category: 'mobile',
      title: 'Asus',
    }, {
      id: 4,
      category: 'mobile',
      title: 'Realme',
    }, {
      id: 5,
      category: 'mobile',
      title: 'I-Phone',
    },
    {
      id: 6,
      category: 'tv',
      title: 'Samsung',
    },
    {
      id: 7,
      category: 'tv',
      title: 'Lenove',
    }, {
      id: 8,
      category: 'tv',
      title: 'Asus',
    }, {
      id: 9,
      category: 'tv',
      title: 'Realme',
    }, {
      id: 10,
      category: 'tv',
      title: 'I-Phone',
    },
    {
      id: 11,
      category: 'laptop',
      title: 'Samsung',
    },
    {
      id: 12,
      category: 'laptop',
      title: 'Lenove',
    }, {
      id: 13,
      category: 'laptop',
      title: 'Asus',
    }, {
      id: 14,
      category: 'laptop',
      title: 'Realme',
    }, {
      id: 15,
      category: 'laptop',
      title: 'I-Phone',
    },
  ];
  const filteredCards = selectedCards === 'all' ? cardsData : cardsData.filter((card) => card.category === selectedCards);
  return (
    <div className='w-full h-[160vh] flex-col gap-12 bg-red-400 flex items-center justify-center'>
      <div className="buttons absolute top-1 space-x-6 py-5 bg-white px-12 rounded-tr-2xl rounded-bl-2xl">
        <button onClick={() => setSelectedCategory('all')} className='px-6 py-1 bg-black rounded-full text-white'>All</button>
        <button onClick={() => setSelectedCategory('mobile')} className='px-6 py-1 bg-black rounded-full text-white'>Mobile</button>
        <button onClick={() => setSelectedCategory('laptop')} className='px-6 py-1 bg-black rounded-full text-white'>Laptop</button>
        <button onClick={() => setSelectedCategory('tv')} className='px-6 py-1 bg-black rounded-full text-white'>TV</button>
      </div>
      <div className="card-data absolute top-20 grid grid-cols-5 gap-4 px-4 py-3 bg-green-50">
        {
          filteredCards.map((card) =>
          (
            <div key={card.id} className="card w-[220px] h-[220px] bg-green-400 flex items-center justify-center gap-4 flex-col rounded-bl-xl rounded-tr-xl">
              <h1 className='text-2xl font-bold uppercase'>{card.category}</h1>
              <p>{card.title}</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default CardsFiltering

// import React, { useState } from 'react'

// const FileringCards = () => {
//   const [selectCategory, setSelectedCategory] = useState('all');
//   const cardsData = [
//     {
//       id: 1,
//       category: 'mobile',
//       title: 'Samsung',
//     }, {
//       id: 2,
//       category: 'mobile',
//       title: 'Lenove',
//     }, {
//       id: 3,
//       category: 'mobile',
//       title: 'Asus',
//     }, {
//       id: 4,
//       category: 'mobile',
//       title: 'Realme',
//     }, {
//       id: 5,
//       category: 'mobile',
//       title: 'I-Phone',
//     },
//     {
//       id: 6,
//       category: 'tv',
//       title: 'Samsung',
//     },
//     {
//       id: 7,
//       category: 'tv',
//       title: 'Lenove',
//     }, {
//       id: 8,
//       category: 'tv',
//       title: 'Asus',
//     }, {
//       id: 9,
//       category: 'tv',
//       title: 'Realme',
//     }, {
//       id: 10,
//       category: 'tv',
//       title: 'I-Phone',
//     },
//     {
//       id: 11,
//       category: 'laptop',
//       title: 'Samsung',
//     },
//     {
//       id: 12,
//       category: 'laptop',
//       title: 'Lenove',
//     }, {
//       id: 13,
//       category: 'laptop',
//       title: 'Asus',
//     }, {
//       id: 14,
//       category: 'laptop',
//       title: 'Realme',
//     }, {
//       id: 15,
//       category: 'laptop',
//       title: 'I-Phone',
//     },
//   ];

//   const filteredData = selectCategory === 'all' ? cardsData : cardsData.filter((card) => card.category === selectCategory);
//   return (
//     <div className='w-full h-[160vh] flex-col gap-12 bg-red-400 flex items-center justify-center'>
//       <div className="buttons absolute top-1 space-x-6 py-5 bg-white px-12 rounded-tr-2xl rounded-bl-2xl">
//         <button onClick={()=>setSelectedCategory('all')} className='px-6 py-1 bg-black rounded-full text-white'>All</button>
//         <button onClick={()=>setSelectedCategory('mobile')} className='px-6 py-1 bg-black rounded-full text-white'>Mobile</button>
//         <button onClick={()=>setSelectedCategory('laptop')} className='px-6 py-1 bg-black rounded-full text-white'>Laptop</button>
//         <button onClick={()=>setSelectedCategory('tv')} className='px-6 py-1 bg-black rounded-full text-white'>TV</button>
//       </div>
//       <div className="card-data absolute top-20 grid grid-cols-5 gap-4 px-4 py-3 bg-green-50">
//         {
//           filteredData.map((card) =>
//           (
//             <div key={card.id} className="card w-[220px] h-[220px] bg-green-400 flex items-center justify-center gap-4 flex-col rounded-bl-xl rounded-tr-xl">
//               <h1 className='text-2xl font-bold uppercase'>{card.category}</h1>
//               <p>{card.title}</p>
//             </div>
//           ))
//         }

//       </div>
//     </div>
//   )
// }

// export default FileringCards