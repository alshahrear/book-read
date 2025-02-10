import { useEffect, useState } from "react";

const ReadBooksList = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
        setReadBooks(storedBooks);
    }, []);

    return (
        <div className="mt-10 max-w-[1250px] mx-auto ">
            {readBooks.length === 0 ? (
                <p className="text-center text-xl">No books in the Readlist.</p>
            ) : (
                readBooks.map((book, index) => {
                    const { bookName, author, image, review, totalPages, rating, category, tags1, tags2, publisher, yearOfPublishing } = book;

                    return (
                        <div key={index} className="flex gap-6 p-4 border-1 border-gray-300 rounded-xl mb-6 ">
                            <img src={image} className="" alt={bookName} />
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold">{bookName}</h3>
                                <p className="text-lg">By : {author}</p>
                                <div className="flex items-center space-x-8">
                                    <p className="text-lg font-extrabold">Tag</p>
                                    <p className="text-lg text-[#23BE0A] bg-[#F3F3F3] rounded-2xl font-medium py-1 px-3">#{tags1}</p>
                                    <p className="text-lg text-[#23BE0A] bg-[#F3F3F3] rounded-2xl font-medium py-1 px-3">#{tags2}</p>
                                    <p className="text-lg ">Year of Publishing: {yearOfPublishing}</p>
                                </div>
                                <div className="flex space-x-4 items-center">
                                    <p className="text-lg text-gray-700" >Publisher: {publisher}</p>
                                    <p className="text-lg text-gray-700">Page: {totalPages}</p>
                                </div>
                                <div className="flex space-x-5 items-center">
                                    <p className="text-lg">Category: {category}</p>
                                    <p className="text-lg">Rating: {rating}</p>
                                    <button className="btn">View Details</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default ReadBooksList;
