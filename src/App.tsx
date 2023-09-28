import "./App.css";
import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
import { Container, Row, Col, Image } from "react-bootstrap";

function App() {
  return (
    <body>
      <header>
        <Header></Header>
      </header>

      <main>
        <Cards></Cards>
      </main>
      <Container>
        <Row className="px-4 py-5">
          <Col sm={4}></Col>
          <Col sm={4}>
            <a href="https://kinetick.com/NinjaTrader" target="_blank">
              <Image src="/src/assets/Kinetick_Logo.png" fluid rounded />
            </a>
          </Col>
          <Col sm={4}></Col>
        </Row>

        <Row className="my-10">
          <h6>Risk Disclosure</h6>
          <p style={{ fontSize: 9 }}>
            Futures and forex trading contains substantial risk and is not for
            every investor. An investor could potentially lose all or more than
            the initial investment. Risk capital is money that can be lost
            without jeopardizing ones’ financial security or life style. Only
            risk capital should be used for trading and only those with suf
          </p>
        </Row>
        <Row>
          <h6>Hypothetical Performance Disclosure </h6>
          <p style={{ fontSize: 9 }}>
            Hypothetical performance results have many inherent limitations,
            some of which are described below. No representation is being made
            that any account will or is likely to achieve profits or losses
            similar to those shown; in fact, there are frequently sharp
            differences between hypothetical performance results and the actual
            results subsequently achieved by any particular trading program. One
            of the limitations of hypothetical performance results is that they
            are generally prepared with the benefit of hindsight. In addition,
            hypothetical trading does not involve financial risk, and no
            hypothetical trading record can completely account for the impact of
            financial risk of actual trading. for example, the ability to
            withstand losses or to adhere to a particular trading program in
            spite of trading losses are material points which can also adversely
            affect actual trading results. There are numerous other factors
            related to the markets
          </p>
        </Row>
      </Container>
    </body>
  );
}

export default App;
