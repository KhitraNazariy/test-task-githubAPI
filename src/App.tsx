import React, {useState} from 'react';
import UserForm from "./components/UserComponents/user.form";
import User from "./components/UserComponents/user";
import GithubUserData from "./types/user.type";


function App() {
    const [user,setUser] = useState<GithubUserData|null>(null)
    return (
        <div className="App">
            <UserForm setUser={setUser}/>
            {
                user&&<User user={user}/>
            }
        </div>
    );
}

export default App;
