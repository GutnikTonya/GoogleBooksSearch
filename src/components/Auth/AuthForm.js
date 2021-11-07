import { useState,useContext,useRef } from 'react';
import AuthContext from '../../store/main-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const inputRef =useRef(null);
  const authCtx=useContext(AuthContext);


  const LogInHandler=(e)=>{
    const nameInputVal=inputRef.current.value;
    if(nameInputVal){
      authCtx.login(true);
      authCtx.setUserName(nameInputVal);
    }

  }


  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Name</label>
          <input ref={inputRef} type='email' id='email' required />
        </div>

        <div className={classes.actions}>
          <button
            type='button'
            className={classes.button}
            onClick={LogInHandler}
          >
           Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
