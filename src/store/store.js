import { configureStore } from '@reduxjs/toolkit'
import games from "./games/games.reducer";


const store = configureStore({
    reducer: { games: games }
});


export default store