import { Box, CircularProgress, Typography } from '@mui/material'
import { MovieList, Search } from 'components'
import { useAppSelector, useMoviesQuery } from 'hooks'
import { Layout } from 'layout/Layout'

export const HomePage = () => {
	const { search, type } = useAppSelector(state => state.search)

	const {
		data: movies,
		isLoading: isMoviesLoading,
		isSuccess: isMoviesSuccess,
	} = useMoviesQuery(search ? search : 'matrix', type ? type : '')

	return (
		<Layout>
			<Box margin="30px 0 50px 0">
				<Search />
				{isMoviesLoading && (
					<Box
						display='flex'
						justifyContent='center'
						marginTop='10%'
					>
						<CircularProgress />
					</Box>
				)}
				{isMoviesSuccess && movies ? (
					<MovieList list={movies} />
				) : isMoviesSuccess && !movies ? (
					<Typography
						variant="h4"
						gutterBottom
						textAlign='center'
						marginTop='10%'
					>
						Ничего не найдено
					</Typography>
				) : null}
			</Box>
		</Layout>
	)
}

