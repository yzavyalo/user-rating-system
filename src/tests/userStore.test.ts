import configureStore from "redux-mock-store";
import testData from "../test-data.json";
import { User } from "../model/types";
import * as selectActions from "../model/actions";
import reducer, { decreaseRating } from "../model/usersStore";

// examples store testing
// dispatch action with type
// dispatch action

export const mockStore = configureStore();
export const store = mockStore();

describe("Test store", () => {
    it("should dispatches the correct action and payload for increaseRating", () => {
        const firstUser: User = testData.users[1];
        const increaceRating = [
            {
                payload: { userId: firstUser.id },
                type: "INCREACE_RATING"
            }
        ];

        store.dispatch(selectActions.increaceRating(firstUser.id));
        expect(store.getActions()).toEqual(increaceRating);
    });

    it("should handle a decrease rating and change rating", () => {
        const previousState = testData;
        const firstUser: User = testData.users[1];
        expect(reducer(previousState, decreaseRating(firstUser.id))).toEqual({
            ...previousState,
            users: previousState.users.map((user: User) => {
                if (user.id === firstUser.id) {
                    return {...user, rating: firstUser.rating - 1};
                } else {
                    return user;
                }
            })
        });
    });
});
