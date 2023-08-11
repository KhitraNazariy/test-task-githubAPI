import React, {FC} from 'react';
import GithubUserData from "../../types/user.type";
import './user.styles.css'

interface IProps {
    user: GithubUserData
}

const User: FC<IProps> = ({user}) => {
    console.log(user)
    return (
        <div className='userWrapper'>
            <img className='userImg' src={user.avatar_url} alt="avatar"/>
            <h3 className='userName'>{user.login}</h3>
            <p className='userBio'>{user.bio?user.bio:'Bio has empty'}</p>
            <a className='userLink' href={user.html_url} target="_blank" rel="noreferrer">Github</a>
        </div>
    );
};

export default User;