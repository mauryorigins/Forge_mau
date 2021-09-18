import React from 'react';
import Botoncitos from '../Communs/Botoncitos.jsx';


export default function Sec3Text(props) {
    return (
      <div>
        <p>
          <span className="Texto1">NO TE PIERDAS </span><span className="Texto2">DE LOS</span> <br />
          <span className="Texto3">!GRANDES <br />DESCUENTOS¡</span> <br />
          <span className="Texto4">QUE TENEMOS </span><span className="Texto5">PARA TI</span>
        </p>
        <Botoncitos name='Saber más'/>
      </div>
    );
  }