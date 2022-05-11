import './App.css';
import SearchResults from './Pages/SearchResults';
import Home from './Pages/Home';
import { Route, Switch } from 'wouter';
import Detail from './Pages/Detail';

import { GifsContextProvider } from './context/GifsContext';
import Helmet from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://unforgif.vercel.app/" />
      </Helmet>
      <div className="container mt-3">
        <a href="/"><h1 className='text-center mb-3'>UnforGif</h1></a>
        <GifsContextProvider>
          <Switch>
            <Route
              component={Home}
              path="/" />
            <Route
              component={SearchResults}
              path="/search/:keyword" />
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
