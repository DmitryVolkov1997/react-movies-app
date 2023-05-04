import { FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { ChangeEvent, SyntheticEvent } from 'react'
import { setSearch, setType } from 'store/slices/searchSlice'

interface SearchProps { }

export const Search = ({ }: SearchProps) => {
	const dispatch = useAppDispatch()
	const { type } = useAppSelector(state => state.search)

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<form
			style={{ marginBottom: '20px' }}
			onSubmit={handleSubmit}
		>
			<FormGroup>
				<TextField
					id="standard-basic"
					label="Поиск"
					variant="standard"
					name='input'
					onChange={(e) => dispatch(setSearch(e.target.value))}
				/>

				<RadioGroup row sx={{
					marginTop: '20px'
				}}>
					<FormControlLabel
						value="all"
						control={
							<Radio
								name='all'
								checked={type === 'all'}
							/>
						}
						label="All"
						name="all"
						defaultValue="all"
						onChange={(e: SyntheticEvent<Element, Event>) => {
							const target = e.currentTarget as HTMLInputElement
							dispatch(setType(target.name))
						}}
					/>

					<FormControlLabel
						value="movies"
						control={
							<Radio
								name='movie'
								checked={type === 'movie'}
							/>
						}
						label="Movies only"
						name="movie"
						onChange={(e: SyntheticEvent<Element, Event>) => {
							const target = e.currentTarget as HTMLInputElement
							dispatch(setType(target.name))
						}}
					/>

					<FormControlLabel
						value="series"
						control={
							<Radio
								name='series'
								checked={type === 'series'}
							/>
						}
						label="Series only"
						name="series"
						onChange={(e: SyntheticEvent<Element, Event>) => {
							const target = e.currentTarget as HTMLInputElement
							dispatch(setType(target.name))
						}}
					/>
				</RadioGroup>
			</FormGroup>
		</form>
	)
}

