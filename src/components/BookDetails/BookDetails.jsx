import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

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
        return <p className="text-center mt-10"><span className="loading loading-spinner text-warning text-4xl "></span></p>;
    }

    const handleReadClick = () => {
        let storedBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
        let storedWishlist = JSON.parse(localStorage.getItem("wishlistBooks")) || [];

        const alreadyInReadList = storedBooks.some((b) => b.bookId === book.bookId);
        const alreadyInWishlist = storedWishlist.some((b) => b.bookId === book.bookId);

        if (alreadyInReadList) {
            toast.error("Already added to the Readlist");
        } else {
            toast.success("Book added to the Readlist");
            
            if (alreadyInWishlist) {
                storedWishlist = storedWishlist.filter((b) => b.bookId !== book.bookId);
                localStorage.setItem("wishlistBooks", JSON.stringify(storedWishlist));
            }

            storedBooks.push(book);
            localStorage.setItem("readBooks", JSON.stringify(storedBooks));
        }
    };

    const handleWishlistClick = () => {
        let storedBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
        let storedWishlist = JSON.parse(localStorage.getItem("wishlistBooks")) || [];

        const alreadyInReadList = storedBooks.some((b) => b.bookId === book.bookId);
        const alreadyInWishlist = storedWishlist.some((b) => b.bookId === book.bookId);

        if (alreadyInReadList) {
            toast.error("Already added to the Readlist");
        } else if (alreadyInWishlist) {
            toast.error("Already added to the Wishlist");
        } else {
            toast.success("Book added to the Wishlist");
            storedWishlist.push(book);
            localStorage.setItem("wishlistBooks", JSON.stringify(storedWishlist));
        }
    };

    const { bookName, author, image, review, totalPages, rating, category, tags1, tags2, publisher, yearOfPublishing } = book;

    return (
        <div className="max-w-[1250px] mx-auto mb-16 mt-10 flex gap-6">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="bg-[#F3F3F3] rounded-xl flex-1 flex justify-center items-center"> 
                <img className="w-2/3" src={image || '/default-image.png'} alt={bookName} />
            </div>
            <div className="flex-1 space-y-4"> 
                <h1 className="text-3xl font-bold">{bookName}</h1>
                <p className="text-lg font-medium">By : {author}</p>
                <div className="text-gray-300"><hr /></div>
                <p className="text-gray-700 text-lg font-medium">{category}</p>
                <div className="text-gray-300"><hr /></div>
                <p className=""><span className="font-extrabold text-lg">Review:</span> {review}</p>
                <p className="text-lg font-extrabold">Tags: 
                    <span className="ml-2 text-[#23BE0A] bg-gray-200 rounded-2xl px-3 py-1 ">#{tags1}</span> 
                    <span className="ml-2 text-[#23BE0A] bg-gray-200 rounded-2xl px-3 py-1 ">#{tags2}</span> 
                </p>
                <div className="text-gray-300"><hr /></div>
                <div className="text-lg space-y-3">
                    <p className="text-gray-700">Number of Pages: <span className="text-gray-800 font-bold">{totalPages}</span></p>
                    <p className="text-gray-700">Publisher: <span className="text-gray-800 font-bold">{publisher}</span></p>
                    <p className="text-gray-700">Year of Publishing: <span className="text-gray-800 font-bold">{yearOfPublishing}</span></p>
                    <p className="text-gray-700">Rating: <span className="text-gray-800 font-bold">{rating}</span></p>
                </div>
                <div className="flex gap-4 mt-4">
                    <button onClick={handleReadClick} className="btn border-2 text-lg border-gray-200 px-5 py-3 rounded-lg">Read</button>
                    <button onClick={handleWishlistClick} className="btn bg-[#50B1C9] text-lg text-white px-5 py-3 rounded-lg">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
