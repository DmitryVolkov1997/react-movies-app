export type Movie = {
	Poster: string
	Title: string
	Type: string
	Year: string
	imdbID: string
}


export type MoviesRes = {
	data: {
		Search: Movie[]
	}
}

type Ratings = {
	Source: string
	Value: string
}

export type MovieInfo = {
	Title: string
	Year: string
	Rated: string
	Released: string
	Runtime: string
	Genre: string
	Director: string
	Writer: string
	Actors: string
	Plot: string
	Language: string
	Country: string
	Awards: string
	Poster: string
	Ratings: Ratings[]
	Metascore: string
	Response: string
	Type: string
	DVD: string
	imdbID: string
	Production: string
	BoxOffice: string
	Website: string
	imdbRating: string
	imdbVotes: string
}

export type MovieInfoRes = {
	data: MovieInfo
}

