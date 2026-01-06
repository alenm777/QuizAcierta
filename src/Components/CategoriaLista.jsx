import React from 'react';
import { imgs, categories } from '../Data';
import CategoriaCard from './CategoriaCard';

const CategoriaLista = () => {
  const [
    imgCiencia,
    imgDeportes,
    imgFilosofia,
    imgGeografia,
    imgHistoria,
    imgLiteratura,
    imgTecnologia,
  ] = imgs;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
      
      <CategoriaCard
        categorySlug="ciencia"
        title={categories.ciencia}
        src={imgCiencia}
        alt={`categoria ${categories.ciencia}`}
        gradientColor="from-purple-500 to-pink-500"
      />

      <CategoriaCard
        categorySlug="deportes"
        title={categories.deportes}
        src={imgDeportes}
        alt={`categoria ${categories.deportes}`}
        gradientColor="from-lime-400 to-teal-700"
      />

      <CategoriaCard
        categorySlug="filosofia"
        title={categories.filosofia}
        src={imgFilosofia}
        alt={`categoria ${categories.filosofia}`}
        gradientColor="from-red-400 to-zinc-400"
      />

      <CategoriaCard
        categorySlug="geografia"
        title={categories.geografia}
        src={imgGeografia}
        alt={`categoria ${categories.geografia}`}
        gradientColor="from-cyan-600 to-lime-200"
      />

      <CategoriaCard
        categorySlug="historia"
        title={categories.historia}
        src={imgHistoria}
        alt={`categoria ${categories.historia}`}
        gradientColor="from-sky-300 to-indigo-900"
      />

      <CategoriaCard
        categorySlug="literatura"
        title={categories.literatura}
        src={imgLiteratura}
        alt={`categoria ${categories.literatura}`}
        gradientColor="from-amber-400 to-emerald-600"
      />

      <CategoriaCard
        categorySlug="tecnologia"
        title={categories.tecnologia}
        src={imgTecnologia}
        alt={`categoria ${categories.tecnologia}`}
        gradientColor="from-violet-900 to-rose-500"
      />
    </div>
  );
};

export default CategoriaLista;
