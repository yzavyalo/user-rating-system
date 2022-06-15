import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

// get users by random-data-api.com API
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
    return getUsersFromAPI();
});

export const getUsersFromAPI = () => {
    return axios
        .get("https://random-data-api.com/api/users/random_user?size=5")
        .then((response) => response.data);
};

export const getUserRatingList = (state: RootState) =>
    state.userRatingStore.users;

export const getDiligentUsers = (state: RootState) =>
    state.userRatingStore.users.filter(
        (user) => user && user.rating !== undefined && user.ratingGroup === true
    );

export const getSuspiciousUsers = (state: RootState) =>
    state.userRatingStore.users.filter(
        (user) =>
            user &&
            user.rating !== undefined &&
            user.ratingGroup !== undefined &&
            user.ratingGroup === false
    );

export const getUnsortedUsers = (state: RootState) =>
    state.userRatingStore.users.filter(
        (user) => !user.hasOwnProperty("rating")
    );
