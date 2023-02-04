import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ label }) => {
  const {toggle , themeFunction} = useContext(ThemeContext)

return (
	<div className={toggle ? "container" : "cont"} >
	{label}{" "}
	<div className="toggle-switch">
		<input onChange={themeFunction} type="checkbox" className="checkbox"
			name={label} id={label} />
		<label className="label" htmlFor={label}>
		<span className="inner" />
		<span className="switch" />
		</label>
	</div>
	</div>
);
};

export default ToggleSwitch;
