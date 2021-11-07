import {Fragment, useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthContext from './store/main-context';

import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage';
import SearchPage from './pages/SearchPage'
import WishlistPage from './pages/WishListPage'

function App() {
  const authCtx = useContext(AuthContext);
  let isLogged=authCtx.isLoggedIn;
  return (
    <Fragment>
    {isLogged ? 
    <Layout>
      <Switch>
        <Route path='/' exact>
          <SearchPage />
        </Route>
        <Route path='/wishlist'>
          <WishlistPage />
        </Route>

      </Switch>
    </Layout>
    :  <AuthPage />}
    </Fragment>
  );
}

export default App;
