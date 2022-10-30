import { useParams } from "react-router-dom";

const Show = () => {
    const { type, id } = useParams();

    return (
        <main>
            {type} {id}
        </main>
    );
};

export default Show;
