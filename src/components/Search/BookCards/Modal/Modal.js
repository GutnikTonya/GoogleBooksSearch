import {Fragment, useContext} from 'react';

import classes from './Modal.module.css';
import AuthContext from '../../../../store/main-context';

const Modal=()=>{
  const authCtx=useContext(AuthContext);

  const closeDialog=()=>{
    authCtx.showDialog(false,{});
    
  }

  const addToWishlist=()=>{
    authCtx.addToWishList(authCtx.dialogDetails);
  }

    return (
      
      <Fragment>
      {authCtx.showdDialog?
        <div id="myModal" className={classes.modal}>
        <div className={classes.modalContent}>
          <span onClick={closeDialog} className={classes.close}>&times;</span>
         

          <div className={classes.cardContainer}>
                      <img src={authCtx.dialogDetails.volumeInfo.imageLinks?.thumbnail}/>
                      <h2>{authCtx.dialogDetails.volumeInfo.title}</h2>
                      <h3>{authCtx.dialogDetails.volumeInfo.authors}</h3>
                      <p>{authCtx.dialogDetails.volumeInfo.publishedDate}</p>
                      <button className={classes.addToWishlist} onClick={addToWishlist}>Add to Wishlist</button>
                  </div>
        </div>
      
      </div>
    :null}
    </Fragment>
    );
}

export default Modal;