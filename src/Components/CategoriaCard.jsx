import React from 'react';
import { Link } from 'react-router-dom';

const CategoriaCard = 
({ 
category,
alt,
src,
gradientColor,
    }) => {
  return (
    <Link to={`/categoria/${category}`}
     className={`flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r ${gradientColor} transition-all hover:scale-105`}>
    <div className='p-5 flex justify-center items-center'>
       <img
        src={src}
         alt={alt}
          className='w-36'
           />
   </div>
   <h1 className='text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
    {category}
    </h1>
 </Link>
  )
}

export default CategoriaCard