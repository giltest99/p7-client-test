import React, {useState}  from 'react'
import Navigation from '../components/Navigation'
import axios from 'axios';



export default function CreateComment() {
    document.title = 'Create comment';

    const [postId, setPostId] = useState()
    const [content, setContent] = useState('Default content...')
    const [userId, setUserId] = useState()

    const submitForm = (event) => {
        event.preventDefault();
    
        const newComment = {
            post_id: postId,
            content: content,
            user_id: userId
        }
    
        axios
          .post("http://localhost:3000/api/comments", newComment)
          .then((response) => {
            console.log(response);
    
          })
          .catch((error) => {
            console.log(error);
          });
      };
    

  return (
    <div>
        <Navigation />
        

        <form onSubmit={submitForm} style={{width:'1024px',margin:'100px auto'}}>
        <h1>CREATE COMMENT</h1>
            <p>
                <input
                type="text"
                onChange={(e) => setPostId(e.target.value)}
                placeholder={"Post id..."}
                />
            </p>
            
            <br />

            <p>
                <textarea
                style={{width:'500px',height:'300px',resize:'none'}}
                onChange={(e) => setContent(e.target.value)}
                placeholder={content}
                />
            </p>

            <br />
            
            <p>
                <input
                type="text"
                onChange={(e) => setUserId(e.target.value)}
                placeholder={"User id..."}
                />
            </p>
            
            <br />

            <button type="submit">Créer comment</button>

      </form>


    </div>
  )
}
