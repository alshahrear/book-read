import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ListedBooks = () => {
    const [activeTab, setActiveTab] = useState("read");

    return (
        <div className="max-w-[1250px] mt-5  mx-auto ">
            <div className="bg-[#F3F3F3] rounded-xl py-4">
                <h2 className="text-center text-3xl font-extrabold">Books</h2>
            </div>
            <div className="mt-5 flex justify-center">
                <button className="flex items-center px-3 py-2 text-xl rounded-lg text-white bg-[#23BE0A]">
                    Short By <span className="text-3xl"><MdOutlineKeyboardArrowDown /></span>
                </button>
            </div>
            {/* another div */}
            <div className="max-w-[1250px] mx-auto mt-5">
            <div className="border-b">
                <div className="flex space-x-6">
                    <button 
                        className={`px-4 py-2 font-medium border-t-2 border-l-2 border-r-2 rounded-t-lg ${
                            activeTab === "read"
                                ? "border-gray-400 border-b-white bg-white"
                                : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab("read")}
                    >
                        Read Books
                    </button>
                    <button 
                        className={`px-4 py-2 font-medium ${
                            activeTab === "wishlist"
                                ? "border-gray-400 border-b-white bg-white"
                                : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab("wishlist")}
                    >
                        Wishlist Books
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ListedBooks;