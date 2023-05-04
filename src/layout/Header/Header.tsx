import {GitHub} from '@mui/icons-material'
import {Box, Paper, Typography, useMediaQuery} from '@mui/material'
import {Container} from 'components'
import {Link} from 'react-router-dom'

export const Header = () => {
	const matches = useMediaQuery('(max-width:882px)')

	return (
		<Paper
			component="header"
			sx={{background: '#212121'}}
		>
			<Container>
				<Box
					display="grid"
					gridTemplateColumns="1fr auto"
					minHeight="80px"
					alignItems="center"
					color="white"
				>
					<Link to="/">
						<Typography
							variant="h4"
							textTransform="uppercase"
						>
							Movies
						</Typography>
					</Link>

					<GitHub sx={{
						fontSize: '50px',
						cursor: 'pointer',
						"&:hover": {
							color: '#e53935'
						},
						transitionProperty: "all",
						transitionDelay: '.22s'
					}}/>
				</Box>
			</Container>
		</Paper>
	)
}
