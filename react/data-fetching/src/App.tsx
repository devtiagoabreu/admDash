import axios from 'axios';
//import { useFetch } from './hooks/useFetch';
import { useQuery } from 'react-query'

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const { data: repositories, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/devtiagoabreu/repos')

    return response.data;
  })
  //const { data: repositories, isFetching } = useFetch<Repository[]>('/users/devtiagoabreu/repos')

  return (
    <ul>
      { isFetching && <p>Carregando....</p> }
      {repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )

}

export default App
