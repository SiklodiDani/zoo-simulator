import { createSlice } from "@reduxjs/toolkit";

//* I created a stateSlice for the time as well, instead of having the time as another value in the 
//* animalSlice state, because I didn't want every animal to store this value. And this way it's a 
//* lot easier to scale it since it doesn't affect any other data.

const timeSlice = createSlice({
	name: "time",
	initialState: {time: 1},
	reducers: {
		updateTime (state, action) {
            state.time = state.time + 1;
			if(state.time > 24)
			{
				state.time = 1;
			}
        }
	},
});

export const { updateTime } = timeSlice.actions;
export default timeSlice.reducer;