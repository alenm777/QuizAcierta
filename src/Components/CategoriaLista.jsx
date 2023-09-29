import React from 'react'
import { Link } from 'react-router-dom'

const CategoriaLista = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
        <Link to={`/categoria/${id}`} className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105'>
            <div className='p-5 flex justify-center items-center'>
                <img src={algo} alt={`categoria`} className='w-36' />
            </div>
            <h1 className='text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>{algo}</h1>
        </Link>
    </div>
  )
}

export default CategoriaLista