import React from "react";
import "./Input.css";

const Input = ({ className, type, text, value, setData }) => {
	return (
		<input
			className={className}
			type={type}
			placeholder={text}
			value={value}
			onChange={(event) => {
				setData(event.target.value);
			}}
		/>
	);
};

export default Input;
