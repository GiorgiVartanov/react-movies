import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Show = () => {
    const { type, id } = useParams();

    const { data } = useQuery([`${type}-${id}`], () =>
        Axios.get(`http://localhost:5000/api/${type}/${id}`).then(
            (res) => res.data
        )
    );

    return <main>{data?.title}</main>;
};

export default Show;
