import { User } from "./types";

export type Action =
    | IIncreaceRatingAction
    | IDecreaceRatingAction
    | IResetRatingAction
    | IAddUsersAction;

export interface IIncreaceRatingAction {
    type: "INCREACE_RATING";
    payload: {
        userId: number;
    };
}

export interface IDecreaceRatingAction {
    type: "DECREACE_RATING";
    payload: {
        userId: number;
    };
}

export interface IResetRatingAction {
    type: "RESET_RATING";
    payload: {
        userId: number;
    };
}

export interface IAddUsersAction {
    type: "ADD_USERS";
    payload: {
        users: User[];
    };
}
