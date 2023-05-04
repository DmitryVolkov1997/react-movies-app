import React from 'react'
import {MovieInfo as MovieInfoType} from 'types'
import {Box, Paper, Typography, useMediaQuery} from '@mui/material'

interface MovieInfoProps {
	info: MovieInfoType
}

export const MovieInfo = ({info}: MovieInfoProps) => {
	const matches = useMediaQuery('(max-width:768px)')

	return (
		<Paper elevation={3} sx={{margin: '50px 0 50px 0'}}>
			<Box
				display="grid"
				gridTemplateColumns={matches ? "1fr" : "auto 1fr"}
				columnGap="50px"
				padding="20px"
			>
				<Box sx={{marginBottom:'30px'}}>
					<Box
						component="img"
						src={info.Poster}
						alt={info.Title}
					/>
				</Box>

				<Box>
					<Typography variant="h5" gutterBottom>
						{info.Title} ({info.Year})
					</Typography>
					<Box>
						<Box>
							<Box component="strong">
								Director:&nbsp;
							</Box>
							<Box component="span">
								{info.Director}
							</Box>
						</Box>

						<Box>
							<Box component="strong">
								Writers:&nbsp;
							</Box>
							<Box component="span">
								{info.Writer}
							</Box>
						</Box>

						<Box>
							<Box component="strong">
								Stars:&nbsp;
							</Box>
							<Box component="span">
								{info.Actors}
							</Box>
						</Box>

						<Box>
							<Box component="strong">
								Genres:&nbsp;
							</Box>
							<Box component="span">
								{info.Genre}
							</Box>
						</Box>

						<Box>
							<Box component="strong">
								Release Date:&nbsp;
							</Box>
							<Box component="span">
								{info.Released}
							</Box>
						</Box>

						<Box>
							<Box component="strong">
								Runtime:&nbsp;
							</Box>
							<Box component="span">
								{info.Runtime}
							</Box>
						</Box>

						<Box>
							<Box component="strong">
								Rated:&nbsp;
							</Box>
							<Box component="span">
								{info.Rated}
							</Box>
						</Box>

						<Box>
							<Box component="strong">
								Box Office:&nbsp;
							</Box>
							<Box component="span">
								{info.BoxOffice}
							</Box>
						</Box>
					</Box>
					<Box marginTop="20px">
						<Typography variant="h6" gutterBottom>
							Plot
						</Typography>
						<Box component="p">
							{info.Plot}
						</Box>
					</Box>

					<Box sx={{marginTop: '15px'}}>
						<Typography variant="h6" gutterBottom>
							Ratings
						</Typography>

						{
							info.Ratings.map((rating, idx) => {
								return (
									<Box key={idx}>
										<Box component="strong"
											 color="darkcyan"
										>
											{rating.Source}&nbsp;
										</Box>
										<Box component="strong" color="forestgreen"
										>
											{rating.Value}
										</Box>
									</Box>
								)
							})
						}
					</Box>
				</Box>
			</Box>
		</Paper>
	)
}

