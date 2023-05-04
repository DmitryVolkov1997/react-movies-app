import {useQuery} from '@tanstack/react-query'
import {getMovieDetails} from 'services'

export const useMovieDetailsQuery = (movieId: string) => {
	return useQuery({
		queryFn: () => getMovieDetails(movieId),
		queryKey: ['details', movieId],
		select: ({data}) => {
			return data
		},
		enabled: !!movieId
	})
}