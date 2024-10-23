

const Book = ({book}) => {
    return (
        <div className="student">
            <h2>Book Name: {book.name}</h2>
            <p>Price: {book.price}</p>
        </div>
    );
};

export default Book;