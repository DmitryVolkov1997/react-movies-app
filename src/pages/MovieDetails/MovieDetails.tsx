import React from 'react'
import {useParams} from 'react-router-dom'
import {Layout} from 'layout/Layout'
import {useMovieDetailsQuery} from 'hooks'
import {Box, CircularProgress} from '@mui/material'
import {MovieInfo} from 'components'

export const MovieDetails = () => {
	const {id} = useParams()
	const {data: info, isLoading: isInfoLoading, isSuccess: isInfoSuccess} = useMovieDetailsQuery(id ? id : '')

	return (
		<Layout>
			{isInfoLoading && (
				<Box
					display="flex"
					justifyContent="center"
					marginTop="10%"
				>
					<CircularProgress/>
				</Box>
			)}

			{isInfoSuccess && (
				<MovieInfo info={info}/>
			)}
		</Layout>
	)
}

