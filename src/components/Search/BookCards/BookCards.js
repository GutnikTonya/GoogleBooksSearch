import {useContext} from 'react';
import Modal from './Modal/Modal.js';
import AuthContext from '../../../store/main-context.js';
import classes from './BookCard.module.css';


const BookCards=(props)=>{
    const authCtx=useContext(AuthContext);
    return(
       <div className={classes.bookList}>
          {
              props.books.slice(0, 20).map((book,i)=>{
                  return <div key={book.id} onClick={props.hideModal?null:()=>{props.showDialogHandler(book.id)}} className={classes.cardContainer}>
                   {props.hideModal?<span onClick={()=>{authCtx.removeFromWishList(book)}} className={classes.close}>&times;</span>:null}
                      <img src={book.volumeInfo.imageLinks?.thumbnail}/>
                      <h2>{book.volumeInfo.title}</h2>
                      <h3>{book.volumeInfo.authors}</h3>
                      <p>{book.volumeInfo.publishedDate}</p>
                  </div>
              })
          }
       {props.hideModal?null:<Modal/>}
       </div>
    )
}

export default BookCards;