import React from 'react';
import { Row, Col} from "antd";
import Sec4Text from './Sec4Text';
import Sec4img from "./Sec4img";

export default function Curso() {
  return (
      <div className="ContenedorCurso">
    <Row>
        <Col span={12}> <Sec4img /> </Col>
        <Col span={12}> <Sec4Text /> </Col> 
    </Row>
        </div>
    );
}
