import React from 'react';
import s from './Profile.module.css';
import Myposts from '../Profile/Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <Myposts posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.profilePage.updateNewPostText}
                addPost={props.addPost} />
        </div>
    )
};
export default Profile;