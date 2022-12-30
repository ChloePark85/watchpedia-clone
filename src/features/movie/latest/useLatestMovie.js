import { useQuery } from 'react-query'
import { latestApi} from '../../../apis/movieAPI'

const useLatestMovie = () => {
    return useQuery('latestMovie', latestApi)
}

export default useLatestMovie;