import React from "react";
import { Button } from "antd";

export default function Botoncitos(props) {
  const name = props.name;

  return (
    <div className="ContenedorBotoncitos">
      <Button type="link">{name}</Button>
    </div>
  );
}
