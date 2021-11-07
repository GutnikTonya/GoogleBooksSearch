import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import AuthContext from '../../store/main-context';

const MainNavigation = () => {
  const authCtx=useContext(AuthContext);

  const logoutHandler=()=>{
    authCtx.login(false);
  }


  return (
    <header className={classes.header}>
    <div className={classes.userDetails}>Hello, {authCtx.userName}</div>
      <nav>
        <ul>
        <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/wishlist'>Wishlist</Link>
          </li>
          <li>
            {!authCtx.isLoggedIn?
            <Link to='/auth'>Login</Link>
              :
              <button onClick={logoutHandler}>Logout</button>
            }
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
