import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

import ShowSection from "../components/molecules/ShowSection";

const Home = () => {
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
        </main>
    );
};

export default Home;
