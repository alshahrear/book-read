import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookList = ({ booklist }) => {

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags1, tags2, publisher, yearOfPublishing } = booklist;

    return (
        <Link to={`/book/${bookId}`}>
            <div className="">
                <div className="">
                    <div className=" p-5 card rounded-xl border-2 border-gray-200 ">
                        <div className="">
                            <figure className="bg-[#F3F3F3] w-[350px] rounded-xl">
                                <img
                                    className="w-[90px] h-[170px] py-3"
                                    src={image}
                                    alt="" />
                            </figure>
                            <div className="flex mt-3 text-xl font-semibold text-[#23BE0A]">
                                <p className="mr-5 px-2 py-1 bg-[#F3F3F3] rounded-2xl">#{tags1}</p>
                                <p className="bg-[#F3F3F3] px-2 py-1 rounded-2xl">#{tags2}</p>
                            </div>
                            <div className="border-b mt-3 space-y-2 border-dashed pb-3">
                                <h3 className="text-3xl font-semibold">{bookName}</h3>
                                <p className="text-xl">By : {author}</p>
                            </div>
                            <div className="flex justify-between pt-3">
                                <div><h4 className="text-xl">{category}</h4></div>
                                <div className="flex text-center items-center text-xl">
                                    <p className="mr-2">{rating}</p>
                                    <p><FaRegStar></FaRegStar></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookList;