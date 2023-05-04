import { GitHub } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'
import { Container } from 'components'


export const Footer = () => {
	return (
		<Paper
			component="footer"
			sx={{ background: '#212121' }}
		>
			<Container>
				<Box
					display="grid"
					gridTemplateColumns="1fr auto"
					minHeight="80px"
					alignItems="center"
					color='white'
				>
					<Typography
						variant="h6"
					>
						Ⓒ {new Date().getFullYear()} Copyright Text
					</Typography>

					<GitHub sx={{
						fontSize: '50px',
						cursor: 'pointer',
						"&:hover": {
							color: '#e53935'
						},
						transitionProperty: "all",
						transitionDelay: '.22s'
					}} />
				</Box>
			</Container>
		</Paper>
	)
}

