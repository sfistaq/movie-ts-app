import Global from "./styles/global";
import GlobalState from "./store/GlobalState";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Topbar from "./components/Topbar/Topbar";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";
import WatchList from "./components/WatchList/WatchList";
import Watched from "./components/Watched/Watched";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Global />
          <Topbar />
          <GlobalState>
            <Switch>
              <Route path="/" exact component={Search} />
              <Route path="/details/:id" component={Details} />
              <Route path="/watchlist" component={WatchList} />
              <Route path="/watched" component={Watched} />
              <Redirect to="/" />
            </Switch>
          </GlobalState>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
