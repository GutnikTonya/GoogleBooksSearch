import {useRef,useState,useContext} from 'react';

import BookCards from './BookCards/BookCards';
import classes from './Search.module.css';
import AuthContext from '../../store/main-context';

const Search =()=>{
    const inputRef = useRef();
    const authCtx=useContext(AuthContext);
    const [books,setBooks]=useState([]);
    const [showDialog,setShowDialog]=useState(false);



    const seacrhHandler=(e)=>{
        e.preventDefault();
        const searchVal=inputRef.current.value;
        if(searchVal){
        fetch('https://www.googleapis.com/books/v1/volumes?q='+searchVal)
        .then(response => response.text())
        .then(data => {
            const dataArr=JSON.parse(data);
            if(dataArr.totalItems>0)
                setBooks([...dataArr.items])
            else
            setBooks([]);
           
        })
        .catch(err=>{
        })
    }
    }


    const showDialogHandler=(id)=>{  
        const book=books.find(x => x.id === id);
        authCtx.showDialog(true,book);
    }

   return(
       <div className={classes.searchContainer}>
       <form onSubmit={seacrhHandler} >
            <input
            type="text"
            className={classes.searchBox}
            placeholder="Search books"
            ref={inputRef}
            onChange={seacrhHandler}
        />
        <button className={classes.searchButton} type="submit">Search</button>    
       </form>
       <BookCards showDialogHandler={showDialogHandler} books={books}/>
       </div>
   )     
}


export default Search;

