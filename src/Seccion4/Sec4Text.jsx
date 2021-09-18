import React from "react";
import Botoncitos from "../Communs/Botoncitos.jsx";

export default function Sec4Text(props) {
  return (
    <div>
      <p>
        <span className="Text1">CONOCE <br /></span>
        <span className="Text2">¡NUESTRA <br /> ACADEMIA!<br /></span> 
        <span className="Text3">
          NOSOTROS TE ENSEÑAMOS CON
        </span><br /><span className="Text4">NUESTROS </span>
        <span className="Text5">CURSOS ONLINE</span>
      </p>
      <Botoncitos name="Informacion." />
    </div>
  );
}
