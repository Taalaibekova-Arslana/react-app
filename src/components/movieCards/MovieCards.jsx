import React, { useState } from "react";
import NewMovie from "../NewMovie/NewMovie";
import MovieCardList from "../movieCardList/MovieCardList";

const MovieCards = () => {
	const [movieses, setMovieses] = useState([]);
	const [filterMovie, setFilterMovie] = useState([]);
	const [allMovie, setAllMovie] = useState([]);
	return (
		<div>
			<NewMovie
				movieses={movieses}
				setMovieses={setMovieses}
				setFilterMovie={setFilterMovie}
				setAllMovie={setAllMovie}
			/>
			<MovieCardList movieses={filterMovie} allMovie={allMovie} />
		</div>
	);
};

export default MovieCards;
