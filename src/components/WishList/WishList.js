
import {useContext,useState} from 'react';

import AuthContext from "../../store/main-context";
import BookCards from "../Search/BookCards/BookCards";

import classes from './WishList.module.css';

const WishList=()=>{
    const authCtx=useContext(AuthContext);
    return (
        <div className={classes.WishListWrapper}>
        <BookCards hideModal={true} books={authCtx.wishlist}/>
        </div>
    );

}

export default WishList;