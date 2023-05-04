import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material'
import {Movie} from 'types'
import {Link} from 'react-router-dom'

interface MovieItemProps extends Movie {
}

export const MovieItem = ({Poster: poster, Title: title, Type: type, Year: year, imdbID: id}: MovieItemProps) => {

	return (
		<Card sx={{
			display: 'flex',
			flexDirection: "column",
		}}>
			<Link
				to={`details/${id}`}
				style={{
					display: 'flex',
					flexDirection: 'column',
					flexGrow: 1
				}}>
				{
					poster === 'N/A' ? (
						<CardMedia
							sx={{
								height: '400px',
								width: '100%',
								objectPosition: 'center',
								objectFit: 'cover',
							}}
							image={`https://place-hold.it/300x500?text=${title}`}
							title={title}
							component="img"
						/>
					) : (
						<CardMedia
							sx={{
								height: '400px',
								width: '100%',
								objectPosition: 'center',
								objectFit: 'cover',
							}}
							image={poster}
							title={title}
							component="img"
						/>
					)
				}

				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						flexGrow: 1
					}}>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							flexGrow: 1
						}}
					>
						{title}
					</Typography>

					<Box
						display="flex"
						justifyContent="space-between"
					>
						<Box>{year}</Box>
						<Box>{type}</Box>
					</Box>
				</CardContent
				>
			</Link>
		</Card>
	)
}

