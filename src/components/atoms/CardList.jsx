const CardList = ({ children }) => {
    return (
        <div className="grid gap-2 place-content-center w-fit m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {children}
        </div>
    );
};

export default CardList;
