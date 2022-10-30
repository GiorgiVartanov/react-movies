import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

import ShowSection from "../components/molecules/ShowSection";

const Home = () => {
    const { data } = useQuery(["upcoming_movies"], () =>
        Axios.get("http://localhost:5000/api/movie/upcoming").then(
            (res) => res.data
        )
    );
    // const { topMovies } = useQuery(["top_movies"], () =>
    //     Axios.get("http://localhost:5000/api/movie/top_rated").then(
    //         (res) => res.data
    //     )
    // );
    // const { popularMovies } = useQuery(["popular_movies"], () =>
    //     Axios.get("http://localhost:5000/api/movie/popular").then(
    //         (res) => res.data
    //     )
    // );

    console.log(data);

    return (
        <main className="m-auto sm:w-full md:w-11/12 lg:w-10/12 xl:w-9/12 ">
            <ShowSection
                type="movie"
                sort="upcoming"
                text="upcoming movies"
            />
            <ShowSection
                type="movie"
                sort="top_rated"
                text="top rated movies"
            />
            <ShowSection
                type="movie"
                sort="popular"
                text="popular movies"
            />

            {/* <h2>upcoming movies</h2>
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
            </CardList> */}
            {/* <h2>top movies</h2>
            <CardList>
                {topMovies?.results.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        score={movie.vote_average}
                        voteCount={movie.voteCount}
                        poster={movie.poster_path}
                    />
                ))}
            </CardList>
            <h2>popular movies</h2>
            <CardList>
                {popularMovies?.results.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        score={movie.vote_average}
                        voteCount={movie.voteCount}
                        poster={movie.poster_path}
                    />
                ))}
            </CardList> */}
        </main>
    );
};

export default Home;
