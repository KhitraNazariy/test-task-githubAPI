import React, {FC} from 'react';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {userService} from "../../services/user.service";
import GithubUserData from "../../types/user.type";
import './user.styles.css'
interface UserFormProps {
    setUser: (user: GithubUserData) => void;
}

const UserForm:FC<UserFormProps> = ({setUser}) => {
    const {register, reset, handleSubmit} = useForm()
    const search: SubmitHandler<FieldValues> = (data) => {
        userService.getByName(data.Name).then(value => setUser(value.data))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(search)}>
            <input className='input-field' type="text" {...register('Name')} placeholder={'Enter nickname'} required={true}/>
            <button className='button' type="submit">Search</button>
        </form>
    );
};

export default UserForm;