import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


export default function ViewAllPosts() {
    const [posts, setPosts] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(`http://localhost:3000/api/posts`);
        setPosts(data);
        console.log(data);
    };

    

    useEffect(() => {
        getData();
    }, []);

    const onDelete = (id) => {
        axios.delete(`http://localhost:3080/api/posts/${id}`)
        .then(() => {
            getData();
        })

                    
    }

    return (
        <>
            <ul style={{display:'flex',flexWrap:'wrap'}}>
                {posts.map(post => {
                   return (
                        <li key={post.id} style={{margin:'10px',border:'1px solid purple',listStyle:'none'}}>
                            <div style={{display:'flex',flexDirection:'column',width:'300px',height:'300px',padding:'10px'}}>
                                <h5>{post.title}</h5>
                                <p>
                                    <textarea style={{width:'100%',resize:'none'}} defaultValue={post.content}>
                                    
                                    </textarea>
                                </p>
                                <Img src={post.attachment} alt="img"/>
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:'10px'}}>
                                    <button className="w3-btn w3-green">Modifier</button>
                                    <button onClick={() => onDelete(post.id)} className="w3-btn w3-red">Supprimer</button>
                                </div>
                                
                                
                            </div>
                            
                        </li>
                    )
                })}
            </ul>
            

        </>
    )
}
