import blogFetch from '../axios/config';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";



const Home = () => {
  
  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    try {
      const response = await blogFetch.get("/posts"); 

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
    <div className="home">
      
      {/* exemplo em uma tabela
      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((post) => (
        <table className="table">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Post</th>
          </tr>
          <tr>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
          </tr>
        </table>
      ))
      )}
        */}


      <h1>Últimos posts</h1>
      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home