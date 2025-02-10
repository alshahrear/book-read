import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ReadBookslist from "../ReadBookslist/ReadBookslist";
import { Link } from "react-router-dom";


const ListedBooks = () => {
    const [activeTab, setActiveTab] = useState("read");

    return (
        <div className="max-w-[1250px] mx-auto mt-5 ">
            <div className="flex justify-center">
                <details className="dropdown">
                    <summary className="btn text-xl bg-[#23BE0A] text-white m-1">
                        Short By <span className="text-2xl"><MdOutlineKeyboardArrowDown /></span>
                    </summary>
                    <ul className="menu dropdown-content text-lg bg-[#F3F3F3] rounded-box z-[1] w-52 shadow">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>

            {/* Tabs */}
            <div className="flex items-center  overflow-x-auto overflow-y-hidden flex-nowrap max-w-[1250px] mx-auto">
                {/* Read Books Tab */}
                <a
                    onClick={() => setActiveTab("read")}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
                    dark:border-gray-400 cursor-pointer text-xl 
                    ${activeTab === "read" ? "border border-b-0 dark:text-gray-900 rounded-t-lg" : "border-b dark:text-gray-600"}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <Link><span>Read Books</span></Link>
                </a>

                {/* Wishlist Books Tab */}
                <a
                    onClick={() => setActiveTab("wishlist")}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
                    dark:border-gray-400  cursor-pointer text-xl
                    ${activeTab === "wishlist" ? "border border-b-0 rounded-t-lg dark:text-gray-900" : "border-b dark:text-gray-600 "}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </a>
            </div>

            {/* readbookslist */}

            <div className="">
            <ReadBookslist></ReadBookslist>
            </div>
        </div>
    );
};

export default ListedBooks;
