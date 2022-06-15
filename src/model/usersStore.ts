import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";
import { DataState } from "./types";

const initialState: DataState = {
    users: [],
    fetchingState: "loading"
};

export const usersStore = createSlice({
    name: "usersStore",
    initialState,
    reducers: {
        addUsers(state: DataState, action: any): DataState {
            return {
                ...state,
                users: [...state.users, ...action.payload]
            };
        },
        increaseRating(state: DataState, action: any): void {
            const userId = action.payload;

            for (const user of state.users) {
                if (user.id === userId) {
                    if (user.rating) {
                        user.rating < 0
                            ? (user.ratingGroup = false)
                            : (user.ratingGroup = true);
                        user.rating += 1;
                    } else {
                        user.rating = 1;
                        user.ratingGroup = true;
                    }
                    break;
                }
            }
        },
        decreaseRating(state: DataState, action: any): void {
            const userId = action.payload;

            for (const user of state.users) {
                if (user.id === userId) {
                    if (user.rating) {
                        user.rating > 0
                            ? (user.ratingGroup = true)
                            : (user.ratingGroup = false);
                        user.rating -= 1;
                    } else {
                        user.ratingGroup = false;
                        user.rating = -1;
                    }
                    break;
                }
            }
        },
        resetRating(state: DataState, action: any): void {
            const userId = action.payload;
            for (const user of state.users) {
                if (user.id === userId) {
                    delete user.rating;
                    break;
                }
            }
        }
    },
    extraReducers: (builder) => {
        const addCase = builder.addCase;
        addCase(fetchUsers.pending, (state) => {
            state.fetchingState = "loading";
        });
        addCase(fetchUsers.fulfilled, (state, action) => {
            state.fetchingState = "ready";
            state.users = action.payload;
        });
        addCase(fetchUsers.rejected, (state, action) => {
            state.fetchingState = "reject";
            state.users = [];
        });
    }
});

export const { addUsers, increaseRating, decreaseRating, resetRating } =
    usersStore.actions;
export default usersStore.reducer;
