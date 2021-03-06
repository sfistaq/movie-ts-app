import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/global";
import SearchState from "./store/Search/SearchState";
import FavState from "./store/Favourite/FavState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
//import { ReactQueryDevtools } from "react-query/devtools";
import Topbar from "./components/Topbar/Topbar";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";
import WatchList from "./components/Favourites/WatchList";
import Watched from "./components/Favourites/Watched";
import * as constants from "./utils/constants";

const queryClient = new QueryClient();

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > constants.SCREEN_M) {
      setMenuOpen(false);
    }
  }, [windowWidth]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <SearchState>
          <FavState>
            <Topbar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              windowWidth={windowWidth}
            />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/watched" element={<Watched />} />
            </Routes>
          </FavState>
        </SearchState>
      </BrowserRouter>

      {/* <ReactQueryDevtools initialIsOpen={false}  /> */}
    </QueryClientProvider>
  );
}

export default App;
