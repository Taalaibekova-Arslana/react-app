import React, { useRef, useState } from "react";
import Input from "../../layout/inputs/Input";
import Button from "../../layout/buttons/Button";
import "./NewMovie.css";

const NewMovie = ({ movieses, setMovieses, setFilterMovie, setAllMovie }) => {
	const [moviesName, setMoviesName] = useState("");
	const [moviesImg, setMoviesImg] = useState("");
	const [moviesGenre, setMoviesGenre] = useState("");

	const addMovies = () => {
		if (moviesName === "" || moviesImg === "" ||  moviesGenre === "") {
			alert("Пожалуйста заполните поле!");
		} else {
			const addMoviesObj = { 
				name: moviesName,
				img: moviesImg,
				genre: moviesGenre,
				id: Math.random(),
			};

			setMovieses([...movieses, addMoviesObj]);
			setFilterMovie([...movieses, addMoviesObj]);
			setAllMovie([...movieses, addMoviesObj]);
			setMoviesName("");
			setMoviesImg("");
			setMoviesGenre("");
		}
	};

	const filterMovie = (genre) => {
		const filterMovieUp = movieses.filter((item) => item.genre === genre);
		setFilterMovie(filterMovieUp);
	};

	const allMovie = (el) => {
		const allMoviegenre = el;

		if (allMoviegenre === "Все") {
			setFilterMovie([...movieses]);
		} else {
			const upMovie = movieses.filter((item) => item.genre === allMoviegenre);
			setAllMovie([...upMovie]);
		}
	};

	return (
		<div className="container">
			<div className="buttons">
				<Button
					className="button1"
					onClick={() => allMovie("Все")}
					text="Все"
				/>
				<Button
					className="button2"
					onClick={() => filterMovie("Комедия")}
					text="Комедия"
				/>
				<Button
					className="button3"
					onClick={() => filterMovie("Драма")}
					text="Драма"
				/>
				<Button
					className="button4"
					onClick={() => filterMovie("Ужастик")}
					text="Ужастик"
				/>
				<Button
					className="button5"
					onClick={() => filterMovie("Боевик")}
					text="Боевик"
				/>
			</div>
			<form
				className="inputs"
				onSubmit={(event) => {
					event.preventDefault();
					addMovies();
				}}>
				<Input
					text="Name Movie"
					type="text"
					value={moviesName}
					setData={setMoviesName}
				/>
				<Input
					text="Img Movie"
					type="text"
					value={moviesImg}
					setData={setMoviesImg}
				/>
				<Input
					text="Genre Movie"
					type="text"
					value={moviesGenre}
					setData={setMoviesGenre}
				/>
				<Button className="addButton" text="ADD" />
			</form>
		</div>
	);
};

export default NewMovie;
