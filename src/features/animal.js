import { createSlice } from "@reduxjs/toolkit";

//* I chose to have one animal slice with a type value for the 
//* different animals instead of having a slice for each type of animal because,
//* most traits are the same for all animals, and I feel it's better to be able to 
//* update the state of all animals from here at the same time.

//* This way, instead of having multiple reducers for each type of animal
//* I only have one reducer with a switch case in it for each different type

const animalSlice = createSlice({
	name: "animal",
	initialState: [
		{
			id: 0,
			type: "elephant",
			health: 100,
			isDead: false,
			canWalk: true,
			walkCounter: 0,
		},
		{
			id: 1,
			type: "elephant",
			health: 100,
			isDead: false,
			canWalk: true,
			walkCounter: 0,
		},
		{
			id: 2,
			type: "elephant",
			health: 100,
			isDead: false,
			canWalk: true,
			walkCounter: 0,
		},
		{
			id: 3,
			type: "elephant",
			health: 100,
			isDead: false,
			canWalk: true,
			walkCounter: 0,
		},
		{
			id: 4,
			type: "elephant",
			health: 100,
			isDead: false,
			canWalk: true,
			walkCounter: 0,
		},
		{ id: 5, type: "monkey", health: 100, isDead: false },
		{ id: 6, type: "monkey", health: 100, isDead: false },
		{ id: 7, type: "monkey", health: 100, isDead: false },
		{ id: 8, type: "monkey", health: 100, isDead: false },
		{ id: 9, type: "monkey", health: 100, isDead: false },
		{ id: 10, type: "giraffe", health: 100, isDead: false },
		{ id: 11, type: "giraffe", health: 100, isDead: false },
		{ id: 12, type: "giraffe", health: 100, isDead: false },
		{ id: 13, type: "giraffe", health: 100, isDead: false },
		{ id: 14, type: "giraffe", health: 100, isDead: false },
	],
	reducers: {
		skipTime: (state, action) => {
            state.forEach((animal) => {
                if (animal.isDead === false) {
					//* I set the random number here and not in the switch
					//* because it needs to differ for each animal, and the type isn't relevant
					animal.health = (animal.health - Math.random() * 20/100 * animal.health).toFixed(2);
					switch (animal.type) {
						case "elephant":
							if (animal.health < 70) {
								animal.canWalk = false;
								animal.walkCounter++;
								if (animal.walkCounter > 1) {
									animal.isDead = true;
								}
							} 
							break;
						case "monkey":
							if(animal.health < 30){
                                animal.isDead = true;
                            }
							break;
						default:
							if(animal.health < 50){
                                animal.isDead = true;
                            }
							break;
					}
				}
			});
		},
		feedAnimals: (state, action) => {

			//* I'm setting the values for the random numbers here and not in the switch statement
			//* because it needs to be the same random value for each type of animal
			const giraffeRndNum = Math.random() * 15 + 10;
			const monkeyRndNum = Math.random() * 15 + 10;
			const elephantRndNum = Math.random() * 15 + 10;

			state.forEach((animal) => {
				if (animal.isDead === false) {
					switch (animal.type) {
						case "elephant":
                            parseFloat(animal.health) + parseFloat(elephantRndNum) > 100
                            ? (animal.health = 100)
                            : (animal.health = (parseFloat(animal.health) + parseFloat(elephantRndNum)/100 * animal.health).toFixed(2));
                            if (animal.walkCounter > 0 && animal.health > 70) {
                                animal.walkCounter = 0;
                                animal.canWalk=true;
                            }
							break;
						case "monkey":
                            parseFloat(animal.health) + parseFloat(monkeyRndNum) > 100
								? (animal.health = 100)
								: (animal.health = (parseFloat(animal.health) + parseFloat(monkeyRndNum)/100 * animal.health).toFixed(2));
							break;
						default:
                            parseFloat(animal.health) + parseFloat(giraffeRndNum) > 100
								? (animal.health = 100)
								: (animal.health = (parseFloat(animal.health) + parseFloat(giraffeRndNum)/100 * animal.health).toFixed(2));
							break;
					}              
				}
			});
		},
	},
});

export const { feedAnimals, skipTime } = animalSlice.actions;
export default animalSlice.reducer;