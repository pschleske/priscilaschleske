// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import './index.css'
// import image from '../src/assets/PriscilaSoftwareEngineer.jpeg';
import { Home } from './elements/Home';
import { Bellwines } from './elements/Bellwines';
import { Backwall } from './elements/Backwall';
import { Contact } from './elements/Contact';
import { Footer } from './elements/Footer';

function App() {

  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/bellwines' element={<Bellwines />} />
          <Route path='/backwall' element={<Backwall />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default App
