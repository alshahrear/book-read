import { useEffect, useState } from "react";
import BookList from "../BookList/BookList";

const BookLists = () => {

    const [bookslist, setBookslist] = useState([]);

    useEffect(() => {
        fetch('bookData.json')
            .then(res => res.json())
            .then(data => setBookslist(data))
    }, []);

    return (
        <div className="max-w-[1250px] mx-auto mb-16">
            <h2 className="text-3xl mt-5 mb-10 text-center font-bold">Books</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    bookslist.map(booklist => <BookList key={booklist.id} booklist={booklist}></BookList>)
                }
            </div>
        </div>
    );
};

export default BookLists;