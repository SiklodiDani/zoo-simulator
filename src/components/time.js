import React from "react";
import { useSelector } from "react-redux";

const Time = () => {

    const time = useSelector((state) => state.time);

    const ShowTime = () => {
			if (time.time < 12) {
				return time.time + " am";
			} else if (time.time === 12) {
				return time.time + " pm";
			} else if (time.time === 24) {
				return time.time - 12 + " am";
			} else {
				return time.time - 12 + " pm";
			}
		};

		return (
			<div className="time-container" >
				<div className="time">
					<ShowTime />
				</div>
			</div>
		);
};

export default Time;