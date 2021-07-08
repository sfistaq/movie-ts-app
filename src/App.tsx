import { useState, useEffect } from "react";
import Global from "./styles/global";
import SearchState from "./store/Search/SearchState";
import FavState from "./store/Favourite/FavState";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
//import { ReactQueryDevtools } from "react-query/devtools";

import Topbar from "./components/Topbar/Topbar";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";
import WatchList from "./components/Favourites/WatchList";
import Watched from "./components/Favourites/Watched";

const queryClient = new QueryClient();

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const menuOpenHanler = () => {
    setMenuOpen((prev) => !menuOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); // resize => handleResize
    return () => {
      window.removeEventListener("resize", handleResize); // cleaning
    };
  }, []);

  //zamyka mobile menu gdy rozciągniesz okno z otwartym mobile menu
  useEffect(() => {
    if (windowWidth > 768) {
      setMenuOpen(false);
    }
  }, [windowWidth]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Global />
        <SearchState>
          <FavState>
            <Topbar
              menuOpen={menuOpen}
              menuOpenHanler={menuOpenHanler}
              closeMobileMenu={closeMobileMenu}
              windowWidth={windowWidth}
            />
            <MobileMenu menuOpen={menuOpen} closeMobileMenu={closeMobileMenu} />
            <Switch>
              <Route path="/" exact component={Search} />
              <Route path="/details/:id" component={Details} />
              <Route path="/watchlist" component={WatchList} />
              <Route path="/watched" component={Watched} />
              <Redirect to="/" />
            </Switch>
          </FavState>
        </SearchState>
      </BrowserRouter>

      {/* <ReactQueryDevtools initialIsOpen={false}  /> */}
    </QueryClientProvider>
  );
}

export default App;
