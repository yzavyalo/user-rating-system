import { fireEvent, render, screen } from "@testing-library/react";
import { ApplicantsList } from "../components/ApplicantsList";
import { DataState, User } from "../model/types";
import testData from "../test-data.json"
import { getUnsortedUsers } from "../model/usersAPI";

// examples of integration test

const mockRatingFunction = jest.fn();

const MockUserCard = () => {
    return (
        <ApplicantsList
            applicantsRatingList={testData.users}
            onIncreaseRating={mockRatingFunction}
            onDecreaseRating={mockRatingFunction}
            onResetRating={mockRatingFunction}
            onRefreshAll={mockRatingFunction}
            onAddUsers={mockRatingFunction}
        />
    );
};

describe("ApplicantsList", () => {

    it("should update applicants list", async () => {
        render(<MockUserCard />);
        const state:DataState = testData;
        const previousState:User[] = getUnsortedUsers({userRatingStore: state});

        const refreshButton = screen.getByRole("button", { name: "Refresh all" });
        fireEvent.click(refreshButton);

        expect(getUnsortedUsers({userRatingStore: state}))
        .toEqual(previousState);
    });
});
