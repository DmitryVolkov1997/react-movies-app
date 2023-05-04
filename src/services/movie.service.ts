import axios from 'axios'
import { MOVIES_API_URL } from 'constants/api'
import { MoviesRes } from 'types'

export const getMovieList = (
	movieName: string,
	type: string
): Promise<MoviesRes> => {

	return axios.get(
		`${MOVIES_API_URL}&type=${type === 'all' ? '' : type}&s=${movieName}`
	)
}
