import React from "react";
import MovieCard from "../movieCard/MovieCard";
import "./MovieCardList.css";

const MovieCardList = ({ movieses }) => {
	return (
		<div className="movieList">
			{movieses.map(({ id, name, img, genre }) => {
				return (
					<MovieCard key={id} name={name} img={img}  genre={genre} />
				);
			})}
		</div>
	);
};

export default MovieCardList;
