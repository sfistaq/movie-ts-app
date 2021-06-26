import Global from "./styles/global";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Container, Sections } from "./styles/App.styles";

import Topbar from "./components/Topbar/Topbar";
import Search from "./components/Search/Search";
import WatchList from "./components/WatchList/WatchList";
import Watched from "./components/Watched/Watched";
import Details from "./components/Details/Details";

const queryClient = new QueryClient();

function App() {
  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Global />
          <Topbar />
          <Sections>
            <Switch>
              <Route path="/" exact component={Search} />
              <Route path="/watchlist" component={WatchList} />
              <Route path="/watched" component={Watched} />
              <Route path="/details/:id" component={Details} />
              <Redirect to="/" />
            </Switch>
          </Sections>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Container>
  );
}

export default App;
