import React, {ReactNode} from 'react'
import styles from './Container.module.sass'
import {Container as ContainerUI} from '@mui/material'

interface ContainerProps {
	children: ReactNode
}

export const Container = ({children}: ContainerProps) => {
	return (
		<ContainerUI>
			{children}
		</ContainerUI>
	)
}

