import CardList from "../atoms/CardList";
import MovieCard from "./MovieCard";

import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const ShowSection = ({ type, sort, text }) => {
    const { data } = useQuery([sort], () =>
        Axios.get(`http://localhost:5000/api/${type}/${sort}`).then(
            (res) => res.data
        )
    );

    return (
        <section className="w-fit m-auto">
            <h2 className="text-slate-700 font-bold ml-2 pl-1 text-xl mt-4 mb-3 font-poppins border-l-8 border-slate-700">
                {text}
            </h2>
            <CardList>
                {data?.results.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        score={movie.vote_average}
                        voteCount={movie.voteCount}
                        poster={movie.poster_path}
                    />
                ))}
            </CardList>
        </section>
    );
};

export default ShowSection;
