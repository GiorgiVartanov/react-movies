import { Link } from "react-router-dom";

const Card = ({ id, type, className, children }) => {
    return (
        <Link
            to={`../show/${type}/${id}`}
            className={`sm:w-52 sm:h-96 w-72 h-{132} p-2 pt-1 pb-1 hover:scale-105 transition-all ease-out delay-75 duration-300 cursor-pointer ${className}`}
        >
            {children}
        </Link>
    );
};

export default Card;
