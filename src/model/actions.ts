import * as interfaces from "./actionsTypes";
import { User } from "./types";

export const increaceRating = (
    userId: number
): interfaces.IIncreaceRatingAction => ({
    type: "INCREACE_RATING",
    // tslint:disable-next-line:object-literal-sort-keys
    payload: {
        userId
    }
});

export const decreaceRating = (
    userId: number
): interfaces.IDecreaceRatingAction => ({
    type: "DECREACE_RATING",
    // tslint:disable-next-line:object-literal-sort-keys
    payload: {
        userId
    }
});

export const resetRating = (
    userId: number
): interfaces.IResetRatingAction => ({
    type: "RESET_RATING",
    // tslint:disable-next-line:object-literal-sort-keys
    payload: {
        userId
    }
});

export const addUsers = (users: User[]): interfaces.IAddUsersAction => ({
    type: "ADD_USERS",
    // tslint:disable-next-line:object-literal-sort-keys
    payload: {
        users
    }
});
