import { combineReducers } from "redux";
import { loginReducer } from "./logInReducer";
import { openLevels } from "./openLevelsReducer";
import { walletReducer } from "./walletReducer";

export const rootReducer = combineReducers({
    wallet: walletReducer,
    logIn: loginReducer,
    openLevels: openLevels
})

export type RootState = ReturnType<typeof rootReducer>
