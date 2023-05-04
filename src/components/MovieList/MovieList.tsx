import { Box } from '@mui/material'
import { Movie } from 'types/Movie'
import { MovieItem } from './MovieItem/MovieItem'

interface MovieListProps {
	list: Movie[]
}

export const MovieList = ({ list }: MovieListProps) => {
	return (
		<Box
			display='grid'
			gridTemplateColumns='repeat(auto-fill, minmax(260px, 1fr))'
			gap='20px'
			gridRow= '1'
		>
			{
				list.map(movie => (
					<MovieItem key={movie.imdbID} {...movie} />
				))
			}
		</Box >
	)
}

