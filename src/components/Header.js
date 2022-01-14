import { Container, Row, Col } from "react-bootstrap"
import SectionSelector from "./SectionSelector"

export default function Header() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f2f2f2",
        color: "#006666",
        fontSize: "1.2rem",
      }}
    >
      <Row>
        <Col>Top Stories</Col>
      </Row>
    </Container>
  )
}
