import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./assets/Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookList from "./BookList";
import Book from "./Book";
import Castomers from "./assets/Castomers";
import ProductList from "./assets/ProductList";

function App() {
  const actors = ["Sakib", "Manna", "Josim"];
// singers
  const singers = [
    { name: "Mahfuz", age: 30 },
    { name: "Mahfuz", age: 30 },
    { name: "Mahfuz", age: 30 },
    { name: "Mahfuz", age: 30 },
  ];
// books
  const books = [
    { id: 1, name: "Physics", price: 100 },
    { id: 2, name: "Chemistry", price: 120 },
    { id: 3, name: "Math", price: 140 },
    { id: 4, name: "Biology", price: 150 },
  ];

  // castomer

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

  // Products

  const products = [  
    {  
        "Product_Id": 1,  
        "Product_Name": "Wireless Mouse",  
        "Product_Details": "A smooth and comfortable wireless mouse with USB receiver."  
    },  
    {  
        "Product_Id": 2,  
        "Product_Name": "Bluetooth Headphones",  
        "Product_Details": "Over-ear headphones with noise cancellation and 20-hour battery life."  
    },  
    {  
        "Product_Id": 3,  
        "Product_Name": "Gaming Keyboard",  
        "Product_Details": "Mechanical keyboard with RGB backlighting and customizable keys."  
    },  
    {  
        "Product_Id": 4,  
        "Product_Name": "4K Monitor",  
        "Product_Details": "27-inch 4K UHD monitor with HDR support and 99% sRGB color coverage."  
    },  
    {  
        "Product_Id": 5,  
        "Product_Name": "Smartphone Stand",  
        "Product_Details": "Adjustable smartphone stand for hands-free use, compatible with all models."  
    }  
]

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

      <ProductList products={products}></ProductList>

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
