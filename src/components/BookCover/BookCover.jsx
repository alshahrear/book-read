import { Link } from "react-router-dom";


const BookCover = () => {
    return (
        <div className="bg-[#1313130D] flex justify-evenly max-w-[1250px] mx-auto rounded-2xl mt-10">
            <div className="space-y-12 place-content-center">
                <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                <Link to="/listed-books">
                <button className="btn text-lg  rounded-lg bg-[#23BE0A] text-white ">View The List</button>
                </Link>
            </div>
            <div>
                <img className="w-60 pt-20 pb-20" src="../../../public/images/book-cover.png" alt="" />
            </div>
        </div>
    );
};

export default BookCover;