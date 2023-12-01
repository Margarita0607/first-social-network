import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cybersport.metaratings.ru/storage/images/13/5f/135f688926e00d9e419b312e2157280c.png' alt='#' width={'700'} height={'400'} />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>



        </div>
    )
};
export default ProfileInfo;