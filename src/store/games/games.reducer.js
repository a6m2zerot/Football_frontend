import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    games: [],
};

const gamesSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        addGame: (state, action) => {
            state.games = [...state.games, action.payload];
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchUsersApi.fulfilled, (state, action) => {
    //         
    //     });
    // }
});

export const allGamesSelector = (state) => state.games.games;

export default gamesSlice.reducer;
export const { addGame } = gamesSlice.actions;
