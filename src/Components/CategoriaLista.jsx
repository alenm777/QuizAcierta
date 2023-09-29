import React from 'react'
import { Link } from 'react-router-dom'
import { imgs, categories } from '../Data';
import CategoriaCard from './CategoriaCard';

const [ 
  imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnologia,
] = imgs;

const CategoriaLista = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>

      {/* categoria ciencia */}
        <CategoriaCard
         category={categories.ciencia}
          src={imgCiencia}
          alt={`categoria ${categories.ciencia}`}
          gradientColor="from-purple-500 to-pink-500"
          />

         {/* categoria deportes*/}
        <CategoriaCard
        category={categories.deportes}
        src={imgDeportes}
        alt={`categoria ${categories.deportes}`}
        gradientColor="from-lime-400 to-teal-700"
        />

            {/* categoria filosofia*/}
        <CategoriaCard
        category={categories.filosofia}
        src={imgFilosofia}
        alt={`categoria ${categories.filosofia}`}
        gradientColor=" from-red-400 to-zinc-400"
        />

          {/* categoria geografia*/}
        <CategoriaCard
        category={categories.geografia}
        src={imgGeografia}
        alt={`categoria ${categories.geografia}`}
        gradientColor="from-cyan-600 to-lime-200"
        />
         

          {/* categoria historia*/}
          <CategoriaCard
        category={categories.historia}
        src={imgHistoria}
        alt={`categoria ${categories.historia}`}
        gradientColor="from-sky-300 to-indigo-900"
        />

          {/* categoria literatura*/}
          <CategoriaCard
        category={categories.literatura}
        src={imgLiteratura}
        alt={`categoria ${categories.literatura}`}
        gradientColor="from-amber-400 to-emerald-600"
        />
         

         {/* categoria tecnologia*/}
         <CategoriaCard
        category={categories.tecnologia}
        src={imgTecnologia}
        alt={`categoria ${categories.tecnologia}`}
        gradientColor=" from-violet-900 to-rose-500"
        />
         
    
    </div>
  )
}

export default CategoriaLista