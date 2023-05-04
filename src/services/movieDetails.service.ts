import {MOVIES_API_URL} from 'constants/api'
import axios from 'axios'
import {MovieInfoRes} from 'types'

export const getMovieDetails = (movieId: string):Promise<MovieInfoRes> => {
	return axios.get(
		`${MOVIES_API_URL}&i=${movieId}&plot=full`
	)
}