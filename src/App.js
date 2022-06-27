import './App.css';
import { Route, Switch } from 'wouter';
import Detail from './Pages/Detail';
import Header from 'components/Header';
import SearchResults from './Pages/SearchResults';
import Home from './Pages/Home';
import Login from './Pages/Login'
import Register from 'Pages/Register';

import { GifsContextProvider } from './context/GifsContext';
import { UserContextProvider } from 'context/UserContext';
import Helmet from 'react-helmet';
import Favorites from 'Pages/Favorites';

function App() {
  return (
    <>
      <UserContextProvider>
        <Helmet>
          <link rel="canonical" href="https://unforgif.vercel.app/" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"></link>
          <link rel="icon" type="image/png" href="favicon.ico"/>
        </Helmet>
        <Header />
        <div className="container mt-3">
          <GifsContextProvider>
            <Switch>
              <Route
                component={Home}
                path="/" />
              <Route
                component={Login}
                path="/login" />
              <Route
                component={SearchResults}
                path="/search/:keyword/:rating?" />
              <Route
                component={Detail}
                path="/gif/:id" />
              <Route
                component={Register}
                path="/register" />
              <Route
                component={Favorites}
                path="/favorites" />
              <Route
                component={() => <h1>Error 404 :(</h1>}
                path="/404" />
            </Switch>
          </GifsContextProvider>
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
