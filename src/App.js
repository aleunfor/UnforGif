import './App.css';
import SearchResults from './Pages/SearchResults';
import Home from './Pages/Home';
import { Route, Switch } from 'wouter';
import Detail from './Pages/Detail';
import Header from 'components/Header';

import { GifsContextProvider } from './context/GifsContext';
import Helmet from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://unforgif.vercel.app/" />
      </Helmet>
      <Header />
      <div className="container mt-3">
        <GifsContextProvider>
          <Switch>
            <Route
              component={Home}
              path="/" />
            <Route
              component={SearchResults}
              path="/search/:keyword/:rating?" />
            <Route
              component={Detail}
              path="/gif/:id" />
            <Route
              component={() => <h1>Error 404 :(</h1>}
              path="/404" />
          </Switch>
        </GifsContextProvider>
      </div>
    </>
  );
}

export default App;
