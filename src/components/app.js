import { ApolloProvider } from "@apollo/client";
import { Route, BrowserRouter } from "react-router-dom";
import client from "../apollo";
import Detail from "../pages/detail";
import Home from "../pages/home";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Detail} />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
