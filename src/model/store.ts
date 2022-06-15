import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import usersReducer from "./usersStore";

export const store = configureStore({
    reducer: {
        userRatingStore: usersReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
