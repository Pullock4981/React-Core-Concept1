import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./assets/Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookList from "./BookList";
import Book from "./Book";
import Castomers from "./assets/Castomers";

function App() {
  const actors = ["Sakib", "Manna", "Josim"];

  const singers = [
    { name: "Mahfuz", age: 30 },
    { name: "Mahfuz", age: 30 },
    { name: "Mahfuz", age: 30 },
    { name: "Mahfuz", age: 30 },
  ];

  const books = [
    { id: 1, name: "Physics", price: 100 },
    { id: 2, name: "Chemistry", price: 120 },
    { id: 3, name: "Math", price: 140 },
    { id: 4, name: "Biology", price: 150 },
  ];

  const castomers = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 28,
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 34,
    },
    {
      id: 3,
      name: "Charlie Brown",
      age: 22,
    },
    {
      id: 4,
      name: "Diana Prince",
      age: 30,
    },
    {
      id: 5,
      name: "Ethan Hunt",
      age: 45,
    },
  ];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Castomers castomers={castomers}></Castomers>

      <BookList books={books}></BookList>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      <Actor name={"raj"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      <Person></Person>
      <Student></Student>
      <div className="task">
        <Todo task="Learn react" isDone={true}></Todo>
        <Todo task="Explore core concept" isDone={false}></Todo>
        <Todo task="Learn JSX" isDone={true}></Todo>
      </div>
    </>
  );
}

// Person

function Person() {
  return (
    <>
      <h3>I am Ashik</h3>
    </>
  );
}

// student

function Student() {
  const AStudent = {
    name: "Ashik",
    age: 24,
  };
  return (
    <div className="student">
      <h2>I am a student</h2>
      <p>Name: {AStudent.name}</p>
      <p>Age: {AStudent.age}</p>
    </div>
  );
}

export default App;
