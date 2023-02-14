import axios from 'axios';
//import { useFetch } from './hooks/useFetch';
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'


export type Repository = {
  full_name: string;
  description: string;
}

export function Repos() {
  const { data: repositories, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/devtiagoabreu/repos')

    return response.data;
  },{
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60, // 1 minute
  })
  //const { data: repositories, isFetching } = useFetch<Repository[]>('/users/devtiagoabreu/repos')

  return (
    <ul>
      { isFetching && <p>Carregando....</p> }
      {repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <Link to={`repos/${repo.full_name}`}>
              {repo.full_name}
            </Link>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )

}


