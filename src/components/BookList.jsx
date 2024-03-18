// import SingleBook from "./SingleBook";
import SingleBookClass from "./SingleBookClass";
import CommentArea from "./CommentArea";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import { Component } from "react";

class BookList extends Component{

  state = {
    selected: undefined,
  };
  
  render(){
  return (
    <Container>
    <Row>
      <Col col={6}>
      {this.props.books.map((book, i) => {
        return (
          <Card
          style={{ width: "18rem" }} key={i}           onClick={() => {
            console.log("premuto")
            this.setState({ selected: book.asin });
          }}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title} </Card.Title>
          </Card.Body>
        </Card>
        
        );
      })}
      </Col>
      <Col col={6}>
        <CommentArea commentsList={this.state.selected}></CommentArea>
      </Col>
    </Row>
    </Container>
  );
    }
};

export default BookList;
