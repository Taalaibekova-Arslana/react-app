import React from "react";
import "./MovieCard.css";

const MovieCard = ({ name, img, genre }) => {
	return (
		<div className="contentBox">
			<div className="movieBox">
				<h1>{name}</h1>
				<img src={img} alt="image" />
				<p>{genre}</p>
			</div>
		</div>
	);
};

export default MovieCard;
