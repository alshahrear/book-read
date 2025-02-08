import { FaRegStar } from "react-icons/fa";

const BookList = ({booklist}) => {

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = booklist;

    return (
        <div className="">
            <div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mr-3">
                        <p># <span></span></p>
                        <p>Identity</p>
                    </div>
                    <div className="border-b border-dashed">
                        <h3>The Catcher in the Rye</h3>
                        <p>By : Awlad Hossain</p>
                    </div>
                    <div className="flex justify-between">
                        <div>Fiction</div>
                        <div className="flex items-center ">
                            <p>5.00</p>
                            <p><FaRegStar></FaRegStar></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookList;