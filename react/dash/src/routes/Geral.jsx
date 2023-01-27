import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Geral.css";



const Home = () => {
  
  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
        ); 

        const data = response.data;

        setPosts(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getPosts()
  }, [])
  
  return (
    <div>
      <h1>Últimos posts</h1>
      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((post) => (
          <div className="post" key={}> </div>
        ))
      )}
    </div>
  );
};

export default Geral