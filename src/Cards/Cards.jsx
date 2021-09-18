import { Row, Col, Card, Avatar } from "antd";

const { Meta } = Card;

export default function Cards() {
  return (
    <Row>
      <Col span={12}>
        <Card style={{ width: 300 }}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Confianza y Transparecia"
            description="Sin letras chiquitas, sin secuestro de tu dominio ni complicaciones, manten segura tu empresa con nostros"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card style={{ width: 300 }}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Al Alcance de Todos"
            description="No importa el tamaño de tu empresa. Nosotros nos encargamos de todo lo relacionado a tu sitio web"
          />
        </Card>
      </Col>
    </Row>
  );
}
