import Header from "./components/atoms/Header";
import Home from "./pages/Home.page";
import Search from "./pages/Search.page";
import Show from "./pages/Show.page";

import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
    const client = new QueryClient({});
    return (
        <div className="">
            <QueryClientProvider client={client}>
                <Header />
                <Routes>
                    <Route
                        path="/home"
                        element={<Home />}
                    />
                    <Route
                        path="/search"
                        element={<Search />}
                    />
                    <Route
                        path="/show/:type/:id"
                        element={<Show />}
                    />
                </Routes>{" "}
            </QueryClientProvider>
        </div>
    );
};

export default App;
