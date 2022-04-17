import React, {useState, useEffect} from 'react';
import Navigation from './Navigation';
import axios from 'axios';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 10px;
`;

export default function AllUsers() {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(`http://localhost:3000/api/users`);
        setUsers(data);
        console.log(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const onDelete = (id) => {
        axios.delete(`http://localhost:3080/api/users/${id}`)
        .then(() => {
            getData();
        })
    }

  return (
    <div>
        <Navigation />
        <h1 className='w3-center'>ALL USERS</h1>

        <div className='w3-container'>
            <ul style={{display:'flex',flexWrap:'wrap'}}>
                {users.map(user => {
                   return (
                        <li key={user.id} style={{margin:'10px',border:'1px solid purple',listStyle:'none'}}>
                            <div style={{display:'flex',flexDirection:'column',width:'300px',height:'500px',padding:'10px'}}>
                                <h5>{user.username}</h5>
                                <h5>ID : {user.id}</h5>
                                <p>{user.email}</p>
                                <Img src={user.avatar} alt="img"/>
                                <textarea style={{width:'100%',height:'80%',resize:'none'}} defaultValue={user.biography} />
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:'10px'}}>
                                    <button className="w3-btn w3-green">Modifier</button>
                                    <button onClick={() => onDelete(user.id)} className="w3-btn w3-red">Supprimer</button>
                                </div>
                            </div>
                            
                        </li>
                    )
                })}
            </ul>
            

        </div>
    </div>
  )
}
