import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const MyFooter=()=>{
    return(
        <Container fluid className="bg-dark text-secondary text-center fs-3" style={{ height: '8em' }}>
        <Row>
          <Col>Footer React Bootstrap</Col>
        </Row>
      </Container>
    )
}
export default MyFooter