import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';


const Header = () => {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const logoutOfApp  = () => {
         dispatch(logout());
         auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
               <img 
               className="header__logo"
               src="https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
               alt="linkedIn-logo"
               />
                 <div className="header__search">
                     <SearchIcon />
                     <input type="text" placeholder="Search" />
                     
                 </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={ NotificationsIcon} title="Notification"  />
                <HeaderOption 
                onClick={logoutOfApp}
                avatar={true}
                title="Me"
                />
            </div>
        </div>
    )
}

export default Header;
