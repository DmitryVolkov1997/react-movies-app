import {Routes, Route} from 'react-router-dom'
import {HomePage, MovieDetails} from 'pages'

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage/>}/>
			<Route path="/details/:id" element={<MovieDetails/>}/>
		</Routes>
	)
}
