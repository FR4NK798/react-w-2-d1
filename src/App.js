import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter.jsx";
// import SingleBook from "./components/SingleBook.jsx";
import SingleBookClass from "./components/SingleBookClass.jsx";
import Horror from "./data/books/horror.json";
import BookList from "./components/BookList.jsx";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <BookList books={Horror}></BookList>

      {/* <SingleBookClass book={Horror[0]}></SingleBookClass> */}
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
