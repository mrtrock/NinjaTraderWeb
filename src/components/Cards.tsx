import React from "react";
import { Container, Row, Col, Image, Card, CardGroup } from "react-bootstrap";
export const Cards = () => {
  const cardInfo: Array<{
    title: string;
    description: string;
    imagePath: string;
  }> = Array(
    {
      title: "Second Entry Indicator",
      description:
        "This indicator will count legs (swings) and display the number on the chart. Very helpful in indentifying two-legged-pullback opportunities",
      imagePath: "/src/assets/secondentry.png",
    },
    {
      title: "Break and Retest",
      description:
        "This indicator will identify multiple areas of support/resistance that have been broken and alert when they've approached the area for retest   ",
      imagePath: "/src/assets/BreakRestest.png",
    }
  );

  return (
    <Container className="px-4 my-5">
      <Row>
        <Col sm={12}>
          <Image src="/src/assets/NinjaTrader.png" fluid rounded />
        </Col>
      </Row>
      <Row>
        <Card
          className="text-center bg-secondary text white py-4 my-5"
          style={{ fontSize: 12 }}
        >
          Hi, I'm Taylor. I can't stand watching people stare and draw lines on
          charts when a computer can do it faster and more effienctly. With that
          said, I build tools to help save you time. Enjoy!
        </Card>
      </Row>
      <Row xs={1} md={2} className="g-4">
        {Array.from(cardInfo).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={_.imagePath} />
              <Card.Body>
                <Card.Title>{_.title}</Card.Title>
                <Card.Text>{_.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
