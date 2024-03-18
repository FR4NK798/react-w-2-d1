import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import CommentList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComment = () => {
    const idBook = this.props.commentsList;
    //   console.log(idBook);

    const urlEndPoint = "https://striveschool-api.herokuapp.com/api/comments/";
    const url = urlEndPoint + idBook;
    const token =
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWQzNjRjNTllYzAwMTk5MGQ2ZmQiLCJpYXQiOjE3MTA0MjQ1ODksImV4cCI6MTcxMTYzNDE4OX0.cZ9PWynLzuIvFvbb4YoMQ8pgyI-BgIyd4H6BceSewno";
    fetch(url, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // questa è l'estrazione del JSON dalla Response, ovvero il nostro array di prenotazioni
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((comment) => {
        console.log("comment", comment);
        this.setState({
          comments: comment,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    console.log("ComponentDidMount");

    this.fetchComment();
  }

  componentDidUpdate(prevProps, prevState) {
    // componentDidUpdate è un altro metodo di lifecycle, come render() e come componentDidMount()
    // componentDidUpdate viene automaticamente invocato, se esiste, ogni volta che cambia lo stato e ogni volta che cambiano le props
    // i due parametri, prevProps e prevState sono importantissimi e devono venire utilizzati OGNI volta che si scrive un componentDidUpdate
    // sono di fatto la differenza tra render() e componentDidUpdate()
    // è sempre una pessima prassi inserire in render() un metodo che lancerà un setState -> loop infinito
    // la nostra fetchMovieInfo() dovrebbe ascoltare un cambio di PROPS, in modo da potersi re-invocare ogni volta che il titolo
    // del film cambia
    // quello che non va bene, però, è che per colpa del setState noi RI-ENTRIAMO nel render()!
    // il bello di componentDidUpdate è che noi possiamo distinguere tra i casi:
    // 1) è cambiata una prop
    // 2) è cambiato lo stato
    //
    // ora "ingabbio" l'invocazione di fetchMovieInfo() in un if()
    // questo if la farà re-invocare SOLAMENTE quando cambiano le props, e NON quando cambia lo stato
    if (prevProps.commentsList !== this.props.commentsList) {
      // ...solo quando c'è stato un cambio della prop movieTitle
      this.fetchComment()
    }
  }

  render() {
    return (
      <>
        <CommentList book={this.state}></CommentList>
        {console.log("this.state", this.state)}
      </>
      //   <ListGroup>
      //     {this.state.comments.map((comment) => {
      //       return <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>;
      //     })}
      //   </ListGroup>
    );
  }
}

export default CommentArea;
