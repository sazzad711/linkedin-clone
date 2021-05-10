import React, { useState} from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
       if(!name){
           return alert("Please enter a full name");
       }
       auth.createUserWithEmailAndPassword(email, password)
       .then((userAuth) => {
           userAuth.user.updateProfile({
               displayName: name,
               photoURL: profilePic,
           })
           .then(() => {
               dispatch(login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoUrl: profilePic, 
               }))
           })
       }).catch((error) => alert(error));
    }
    const loginTOApp = (e) => {
       e.preventDefault();
       auth.signInWithEmailAndPassword(email, password)
       .then((userAuth) => {
           dispatch(login(
               {
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName, 
              profileUrl: userAuth.user.photoURL, 
           }
         ))
       }).catch(error => alert(error));
    }
    return (
        <div className="login">
            <img
            src="https://aerodynamicadvisory.com/wp-content/uploads/2020/06/Linkedin-Logo.png"
            alt=""
            />
            
            <form className="login__form">
                <input
                value={name}
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder="Full Name (Required if registering" 
                />
                <input 
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                type="text" 
                placeholder="Profile Pic URL (Optional)"
                 />
                <input 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 type="email"
                 placeholder="Email" 
                 />
                <input
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 type="password"
                 placeholder="Password"
                   />
                <button onClick={loginTOApp} >
                    sign In
                    </button>
            </form>
           
            <p>New to LinkedIn?
                   <span className="login__register" onClick={register}>
                     Join now
                     </span>
             </p>
        </div>
    )
}

export default Login
