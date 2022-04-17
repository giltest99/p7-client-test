import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';

export default function CreatePost() {
  document.title = 'Create post';

  const [uploadFile, setUploadFile] = useState();
  const [user, setUser] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  
  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("user_id", user);
    dataArray.append("title", title);
    dataArray.append("content", content);
    dataArray.append("attachment", uploadFile);

    console.log(dataArray)

    axios
      .post("http://localhost:3000/api/posts", dataArray, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
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
        
        <form onSubmit={submitForm} encType="multipart/form-data" style={{width:'1024px',margin:'100px auto'}}>
          <h1>CREATE POST</h1>
            <p>
                <input
                type="text"
                onChange={(e) => setUser(e.target.value)}
                placeholder={"User id..."}
                />
            </p>
            
            <br />

            <p>
                <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder={"Title..."}
                />
            </p>

            <br />
            
            <p>
                <input
                type="text"
                onChange={(e) => setContent(e.target.value)}
                placeholder={"Content..."}
                />
            </p>
            
            <br />
                
            <p>
                <input type="file" onChange={(e) => setUploadFile(e.target.files[0])} />
            </p>
            
            <br />

            <button type="submit">Créer post</button>

      </form>


    </div>
  )
}