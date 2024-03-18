import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

const CommentList = (props) => {
  const unike = "a";
  return (
    <ListGroup>
      {props.book.comments.map((comment, i) => {
        return <SingleComment key={i + unike} comment={comment}></SingleComment>;
      })}
    </ListGroup>
  );
};

export default CommentList;
