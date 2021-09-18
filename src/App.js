import React from 'react';
import "antd/dist/antd.css";
import './App.css';
//------Components
import Cards from './Cards/Cards';
import Seccion3 from './Seccion3/Seccion3'; 
import Seccion4 from './Seccion4/Seccion4'

export default function forge() {
  return (
    <div>
    <Seccion3 />
    <Seccion4 />
    <Cards />
    </div>
  );
}