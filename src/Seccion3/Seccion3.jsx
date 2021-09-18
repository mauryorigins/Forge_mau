import { Row, Col} from "antd";
import Sec3Text from './Sec3Text';
import Sec3img from "./Sec3img";

export default function Seccion3() {
  return (
      <div className="ContenedorTexto">
    <Row>
        <Col span={12}> <Sec3Text /> </Col> 
        <Col span={12}> <Sec3img /> </Col>
    </Row>
    </div>
    );
}
