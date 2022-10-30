import Card from "../atoms/Card";

const MovieCard = ({ id, title, poster }) => {
    return (
        <Card
            type="movie"
            id={id}
        >
            <img
                src={`https://image.tmdb.org/t/p/w300/${poster}`}
                alt={title}
            />
            <h3 className="font-poppins text-slate-800">{title}</h3>
        </Card>
    );
};

export default MovieCard;
