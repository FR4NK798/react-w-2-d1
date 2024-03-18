import { Component } from "react";
import Card from "react-bootstrap/Card";
// import CommentArea from "./CommentArea";

class SingleBookClass extends Component {
  // state = {
  //   selected: false,
  // };

  render() {
    return (
      <>
        <Card
          style={{ width: "18rem" }}
          // onClick={() => {
          //   this.setState({ selected: !this.state.selected });
          // }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title} </Card.Title>

          </Card.Body>
        </Card>
        {/* {this.state.selected === true && <CommentArea book={this.props.book}></CommentArea>} */}
      </>
    );
  }
}

export default SingleBookClass;
