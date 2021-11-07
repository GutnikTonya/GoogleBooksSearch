import React,{useState} from 'react';
import Cookie from 'cookie-universal';

const AuthContext=React.createContext({
    isLoggedIn:false,
    userName:'',
    showdDialog:false,
    dialogDetails:{},
    wishlist:[],
    login:(bool)=>{},
    logout:()=>{},
    setUserName:(name)=>{},
    showDialog:(bool,details)=>{},
    addToWishList:(bookObject)=>{},
    removeFromWishList:(bookObject)=>{}
});


export const AuthContextProvider=(props)=>{
    const cookies = Cookie();
    const loogedInCookie=!!cookies.get('useLoggedIn');
    const userNameCookie=cookies.get('userName');
    
    const [isLoggedIn,setLogin] = useState(loogedInCookie);
    const [userName,setUserName] = useState(userNameCookie);
    const [showdDialog,setShowdDialog] = useState(false);
    const [dialogDetails,setDialogDetails] = useState({});
    const [wishlist,setWishlist] = useState([]);



    const createCookie=(name,value,days)=>{
        let expires,expireDate='';
        if(days){
            const date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
             expires = "; expires="+date.toGMTString();
        } 
        document.cookie = name + '=' + value + '; ' + expires + '; path=/';
    }
   
    const loginHandler=(bool)=>{
        if(bool)
         createCookie('useLoggedIn',bool,1);
        else{
            cookies.remove('useLoggedIn');
            cookies.remove('userName');
        }
        setLogin(bool);
    }


    const setUserNameHndler=(name)=>{
        setUserName(name);
        createCookie('userName',name,1);
    }


    const showDialogHandler=(bool,details)=>{
        setShowdDialog(bool);
        setDialogDetails(details);

    }

    const addToWishListHandles=(addedbook)=>{
        let index = wishlist.findIndex((book)=>{
            return book.id === addedbook.id;
        })
        if (index == -1) {
            setWishlist([...wishlist, addedbook]);
        }
    }

    const removeFromWishListHandler=(removedBook)=>{
        let index = wishlist.findIndex((book)=>{
            return book.id === removedBook.id;
        })
        if (index !== -1) {
            wishlist.splice(index, 1);
        }
        
        setWishlist([...wishlist]);
    }


    const contextValue={
        isLoggedIn:isLoggedIn,
        userName:userName,
        showdDialog:showdDialog,
        dialogDetails:dialogDetails,
        wishlist:wishlist,
        login:loginHandler,
        setUserName:setUserNameHndler,
        showDialog:showDialogHandler,
        addToWishList:addToWishListHandles,
        removeFromWishList:removeFromWishListHandler
    }

    

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
};


export default AuthContext;