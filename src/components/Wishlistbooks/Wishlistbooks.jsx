import { GrLocation } from "react-icons/gr";
import { BsPeopleFill } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";

import { useEffect, useState } from "react";

const Wishlistbooks = () => {
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlistBooks")) || [];
        setWishlistBooks(storedWishlist);
    }, []);

    return (
        <div className="mt-10 max-w-[1250px] mx-auto">
            {wishlistBooks.length === 0 ? (
                <p className="text-center text-xl">No books in the Wishlist.</p>
            ) : (
                wishlistBooks.map((book, index) => {
                    const { bookName, author, image, totalPages, rating, category, tags1, tags2, publisher, yearOfPublishing } = book;

                    return (
                        <div key={index} className="flex gap-6 p-4 border-1 border-gray-300 rounded-xl mb-6">
                            <div className="bg-[#F3F3F3] p-3 rounded-xl w-[200px] h-[150px] flex justify-center">
                                <img src={image} className="w-2/3" alt={bookName} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold">{bookName}</h3>
                                <p className="text-lg">By : {author}</p>
                                <div className="flex items-center space-x-8">
                                    <p className="text-lg font-extrabold">Tag</p>
                                    <p className="text-lg text-[#23BE0A] bg-[#f4fcf3] rounded-2xl py-1 px-3 font-bold">#{tags1}</p>
                                    <p className="text-lg text-[#23BE0A] bg-[#f4fcf3] rounded-2xl font-bold py-1 px-3">#{tags2}</p>
                                    <p className="text-lg flex items-center gap-2"><GrLocation /> Year of Publishing: {yearOfPublishing}</p>
                                </div>
                                <div className="flex space-x-4 items-center">
                                    <p className="flex items-center gap-2 text-lg text-gray-700">
                                        <BsPeopleFill /> Publisher: {publisher}
                                    </p>
                                    <p className="flex items-center gap-2 text-lg text-gray-700">
                                        <IoDocumentTextOutline /> Pages: {totalPages}
                                    </p>
                                </div>
                                <div className="flex space-x-5 items-center">
                                    <p className="text-lg text-[#328EFF] bg-[#e0eeff] rounded-2xl px-3 py-1">Category: {category}</p>
                                    <p className="text-lg text-[#FFAC33] bg-[#fff3e0] rounded-2xl px-3 py-1">Rating: {rating}</p>
                                    <button className="btn text-white rounded-3xl text-xl bg-[#23BE0A]">View Details</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Wishlistbooks;
