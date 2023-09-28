import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Container, Row, Col, Image, Card, CardGroup } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <header>
        <Header></Header>
      </header>

      <main>
        <Container className="px-4 my-5">
          <Row>
            <Col sm={12}>
              <Image src="/src/assets/NinjaTrader.png" fluid rounded />
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-secondary text white py-4 my-5"></Card>
          </Row>

          <Row>
            <Col sm={12}>
              <CardGroup className="px-4 my-5">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://picsum.photos/id/200/320/200"
                  />
                  <Card.Body>
                    <Card.Title>Fibonnaci Indicator</Card.Title>
                    <Card.Text>
                      This indicator will identify Fibonnaci cluster. If you
                      follow the Fibonacci Queen, you'll understand how powerful
                      these zones can be.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://picsum.photos/id/200/320/200"
                  />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </main>

      <footer className="bg-light">Text</footer>
    </body>
  );
}

export default App;
