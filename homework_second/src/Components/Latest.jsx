import { Component } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import books from "../Assets/scifi.json";
class Latest extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3 mb-4">
          <Col xs={12} md={4} className="text-center">
            <Carousel interval={99999}>
              {books.map((book) => (
                <Carousel.Item key={book.id}>
                  <img
                    className="d-block w-100"
                    src={book.img}
                    alt={book.title}
                  />
                  <Carousel.Caption className="caption">
                    <h3>{book.title}</h3>
                    <p>{book.price}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Latest;