import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
    const { bookId } = useParams();  

    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch('/bookData.json')  
            .then(res => res.json())
            .then(data => {
                const selectedBook = data.find(book => book.bookId === parseInt(bookId));
                setBook(selectedBook);
            });
    }, [bookId]);

    if (!book) {
        return <p className="text-center text-2xl mt-10">Loading...</p>;
    }

    const { bookName, author } = book;

    return (
        <div className="text-center mt-10">
            <h2 className="text-3xl font-bold">Peye gesi baba: {bookId}</h2>
            <h2 className="text-2xl mt-3">Name: {bookName}</h2>
            <p className="text-xl mt-2">Ebr hoise: {author}</p>
        </div>
    );
};

export default BookDetails;
