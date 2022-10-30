import { useState } from "react";

const SearchBar = ({ placeholder, className }) => {
    const [searchValue, setSearchValue] = useState("");

    const changeSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`searching for ${searchValue}`);
    };

    return (
        <form
            action="submit"
            onSubmit={handleSubmit}
        >
            <input
                type="search"
                onChange={changeSearchValue}
                value={searchValue}
                placeholder={placeholder}
                className={`font-poppins w-full text-center outline-none focus:text-slate-800 text-slate-600 pt-3 pb-3 ${className}`}
            />
        </form>
    );
};

export default SearchBar;
