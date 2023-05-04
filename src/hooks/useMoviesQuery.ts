import { useQuery } from '@tanstack/react-query'
import { getMovieList } from 'services/movie.service'

export const useMoviesQuery = (movieName: string, type: string) => {
	return useQuery({
		queryFn: () => getMovieList(movieName, type),
		queryKey: ['movies', movieName, type],
		select: ({ data }) => {
			return data.Search
		},
		enabled: !!movieName,
	})
}
