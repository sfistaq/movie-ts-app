import Global from "./styles/global";
import SearchState from "./store/SearchState";
import FavouriteState from "./store/FavouriteState";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Topbar from "./components/Topbar/Topbar";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";
import WatchList from "./components/WatchList/WatchList";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Global />
          <SearchState>
            <FavouriteState>
              <Topbar />
              <Switch>
                <Route path="/" exact component={Search} />
                <Route path="/details/:id" component={Details} />
                <Route path="/watchlist" exact component={WatchList} />
                <Redirect to="/" />
              </Switch>
            </FavouriteState>
          </SearchState>
        </BrowserRouter>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
