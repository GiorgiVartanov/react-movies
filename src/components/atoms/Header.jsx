import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex justify-between pt-1 pb-1 pl-3 pr-3 bg-slate-800">
            <h1 className="pt-1 pb-1 pl-3 pr-3 text-slate-100 transition-all ease-out delay-75 duration-300 font-poppins font-bold hover:text-slate-200">
                <Link to="/home">movies</Link>
            </h1>
            <nav className="flex gap-2">
                <NavLink
                    className={({ isActive }) =>
                        `text-slate-200 pt-1 pb-1 pl-3 pr-3 hover:text-slate-300 font-poppins transition-all ease-out delay-75 duration-300 ${
                            isActive ? "text-sky-400 hover:text-sky-500" : ""
                        }`
                    }
                    to="/home"
                >
                    home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `text-slate-200 pt-1 pb-1 pl-3 pr-3 hover:text-slate-300 font-poppins transition-all ease-out delay-75 duration-300 ${
                            isActive ? "text-sky-400 hover:text-sky-500" : ""
                        }`
                    }
                    to="/search"
                >
                    search
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
