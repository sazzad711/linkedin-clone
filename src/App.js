import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widges from './Widges';
import {useSelector} from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';


function App() {
  const user= useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
     auth.onAuthStateChanged((userAuth) => {
       if(userAuth){
         //user is logged in
         dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
         }))   
       }else{
         // user is logged out
         dispatch(logout());
       }
     })
  }, []);

  return (
    <div className="app">
      
       {!user ? (
         <Login />
        ) : (
          <div className="app__header">
            <Header />
          <div className="app__body">
          
          <Sidebar />
          <Feed />
          <Widges />
        </div>
        </div>
        )}
        
      </div>
  ) 
}

export default App;
