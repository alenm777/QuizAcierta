import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PaginaInicio, Categorias } from './Pages';
import NavBar from './Components/NavBar';

const AppRouter = () => {
  return (
<>
<NavBar />

    <Routes>
        <Route path='/' element={<PaginaInicio />} />
        <Route path='/categoria/:categoria' element={< Categorias/>} />
    </Routes>

  </>
  );
};

export default AppRouter;