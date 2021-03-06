import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Post.css';
import InputOption from './InputOption';
import ThumbsUpDownOutlinedIcon from '@material-ui/icons/ThumbsUpDownOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {



    const user = useSelector(selectUser);

    return (
        <div ref={ref} className="post">
           <div className="post__header">
               <Avatar src={photoUrl}>
                   {user.email[0]}
               </Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
           </div> 
           <div className="post__body">
               <p>{message}</p>
           </div>
           <div className="post__buttons">
               <InputOption 
               Icon={ThumbsUpDownOutlinedIcon}
                title="Like"
                color="gray"
                />
                <InputOption
                Icon={ChatOutlinedIcon}
                title="Comment"
                color="gray"
                />
                <InputOption
                Icon={ShareOutlinedIcon}
                title="Share"
                color="gray"
                />
                <InputOption
                Icon={SendOutlinedIcon}
                title="Send"
                color="gray"
                />
           </div>
        </div>
    )
})

export default Post;
