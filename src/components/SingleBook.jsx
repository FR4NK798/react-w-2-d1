import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

const SingleBook = function (prop) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prop.book.img} />
      <Card.Body>
        <Card.Title>{prop.book.title} </Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
