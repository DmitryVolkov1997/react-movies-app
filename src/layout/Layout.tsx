import { Box } from '@mui/material'
import { Container } from 'components'
import { Footer, Header } from 'layout'
import { ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<Box
			display='grid'
			gridAutoColumns='auto 1fr auto'
			gridTemplateRows='auto 1fr auto'
			minHeight='100vh'
		>
			<Header />

			<Box component="main">
				<Container>
					{children}
				</Container>
			</Box>

			<Footer />
		</Box>
	)
}

