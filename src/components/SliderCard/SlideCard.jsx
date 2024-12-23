import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({title,desc,cover}) => {
  return (
      <Container className='box' >
        <Row>
          <Col md={6}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <span className='slider-btn'>Visit Collections</span>
            <br />
          </Col>
          <Col md={6}>
            <img src={cover} alt="#" />
          </Col>
        </Row>

    </Container>
  )
}

export default SlideCard
