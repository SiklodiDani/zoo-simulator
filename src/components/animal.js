import React from "react";
import { useSelector } from "react-redux";

const Animal = () => {
	const animal = useSelector((state) => state.animal);

	return (
		<div className="animal-list">
			{animal.map((animal) => (
				<div className="animal" key={animal.id}>
					<img
						src={`../animalIcons/${animal.type}.png`}
						alt={animal.type}
						style={{ width: "100px" }}
					/>
					<div
						style={{
							fontSize: "25px",
							color: animal.health > 50 ? "green" : "red",
						}}
					>
						Health: {animal.health}%
					</div>
					{animal.isDead ? (
						<div
							style={{
								borderRadius: "12px",
								position: "absolute",
								top: "0",
								bottom: "0",
								left: "0",
								right: "0",
								height: "100%",
								backgroundColor: "rgba(255, 255, 255, 0.1)",
								backdropFilter: "blur(5px)",
							}}
						>
							<div
								style={{
									padding: "2px",
									
									borderRadius: "20px",
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%",
								}}
							>
								<img  src={'../animalIcons/death.png'} alt={"died"} style={{width: "100px"}}/>
							</div>
						</div>
					) : (
						<div></div>
					)}
					{animal.type === "elephant" ? (
						animal.canWalk ? (
							<p></p>
						) : (
							<p>This elephant can't walk.</p>
						)
					) : (
						<p></p>
					)}
				</div>
			))}
		</div>
	);
};

export default Animal;
