import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';

export default function CreateUser() {
    document.title = 'Create user';

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const submitForm = (event) => {
        event.preventDefault();

        const newUser = {
            username: userName,
            email: email,
            password: password
        }


        axios
        .post("http://localhost:3000/api/users/signup", newUser)
        .then((response) => {
        console.log(response);
        
        })
        .catch((error) => {
        console.log(error);
        });

        clearFields(event)
        
    }
    function clearFields(event) {
        Array.from(event.target).forEach((e) => (e.value = ""));
        setUserName('');
        setEmail('');
        setPassword('');
    }

    console.log(userName)

  return (
    <div>
        <Navigation />

        <form onSubmit={submitForm} style={{width:'1024px',margin:'100px auto'}}>
        <h1>CREATE USER</h1>
        <p>
            <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder={"User name..."}
            required
            />
        </p>
        <p>
            <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"User email..."}
            required
            />
        </p>
        <p>
            <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"User password..."}
            required
            />
        </p>

        <button type="submit">Créer user</button>

        </form>
        

    </div>
  )
}
