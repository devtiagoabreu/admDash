import dashboard from '../axios/configApiIntegraFabric';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css";

const Dashboard = () => {
  
  const [contasReceberSaldoTotalMesAtual, setContasReceberSaldoTotalMesAtual] = useState([])

  const getContasReceberSaldoTotalMesAtual = async() => {
    try {
      const response = await dashboard.get("/contasReceberSaldoTotalMesAtual"); 

        const data = response.data;

        setContasReceberSaldoTotalMesAtual(data);

        console.log(contasReceberSaldoTotalMesAtual);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getContasReceberSaldoTotalMesAtual()
  }, [])
  
  return (
    <div className="dashboard">
      
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
      {contasReceberSaldoTotalMesAtual.length === 0 ? <p>Carregando...</p> : (
        contasReceberSaldoTotalMesAtual.map((receberMesAtual) => (
          <div className="receberMesAtual">
            <h2>{receberMesAtual.receberMesAtual}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard