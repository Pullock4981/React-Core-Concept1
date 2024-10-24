// import Book from "./Book";

import Book from "./Book";


// const BookList = ({books}) => {
//     return (
//         <div>
//             <h3>Books: {books}</h3>
//             {
//                 books.map(book => <Book book={book}></Book>)
//             }
//         </div>
//     );
// };

// export default BookList;



const BookList = ({ books }) => {  
    return (  
        <div className="task">  
            <h3 className="task">Books: {books.length}</h3> {/* Changed to display the number of books */}  
            {
                books.map(book=><Book book={book}></Book>)
            }
        </div>  
    );  
};  

export default BookList;