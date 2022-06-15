import { fireEvent, render, screen } from "@testing-library/react";
import { UserCard } from "../components/UserCard";
import { User } from "../model/types";

// examples of different tests
// get text in Card
// get link with email
// get link with phone number
// render button
// click button
// + using block's  and fuction's mock

const testUser: User = {
    id: 5917,
    uid: "f23a5e69-f516-495c-8066-e6ab861d54b3",
    password: "rhdFk7N6PD",
    first_name: "Domenic",
    last_name: "Medhurst",
    username: "domenic.medhurst",
    email: "domenic.medhurst@email.com",
    avatar: "https://robohash.org/quiasediste.png?size=300x300\u0026set=set1",
    gender: "Bigender",
    phone_number: "+7 581-248-7556 x8825",
    social_insurance_number: "379024342",
    date_of_birth: "1989-07-13",
    employment: {
        title: "International Accounting Agent",
        key_skill: "Organisation"
    },
    address: {
        city: "New Randal",
        street_name: "Sabina Forge",
        street_address: "37148 Ullrich Ways",
        zip_code: "63528",
        state: "Michigan",
        country: "United States",
        coordinates: {
            lat: -54.91379429350774,
            lng: 41.9760640895295
        }
    },
    credit_card: {
        cc_number: "4515-9826-6147-8940"
    },
    subscription: {
        plan: "Professional",
        status: "Pending",
        payment_method: "Credit card",
        term: "Monthly"
    }
};

const mockRatingFunction = jest.fn();

const MockUserCard = () => {
    return (
        <UserCard
            user={testUser}
            onIncreaseRating={mockRatingFunction}
            onDecreaseRating={mockRatingFunction}
            onResetRating={mockRatingFunction}
        />
    );
};

describe("UserCard", () => {
    it("should render input title with user name", async () => {
        render(<MockUserCard />);
        expect(
            screen.getByText(testUser.first_name + " " + testUser.last_name)
        ).toBeInTheDocument();
    });

    it("should have link with user email", async () => {
        render(<MockUserCard />);
        expect(screen.getByText(testUser.email).closest("a")).toHaveAttribute(
            "href",
            `maito:${testUser.email}`
        );
    });

    it("should have link with user phone number", async () => {
        render(<MockUserCard />);
        expect(
            screen.getByText(testUser.phone_number).closest("a")
        ).toHaveAttribute("href", `tel:+${testUser.phone_number}`);
    });

    it("should  render + button ", async () => {
        render(<MockUserCard />);
        expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
    });

    testUser.rating = 0;
    it("should  render Del button only if rating is exist", async () => {
        render(<MockUserCard />);
        expect(screen.getByRole("button", { name: "Del" })).toBeInTheDocument();
    });

    it("should click `-` button ", async () => {
        render(<MockUserCard />);
        const minusButton = screen.getByRole("button", { name: "-" });
        fireEvent.click(minusButton, { target: { value: testUser.id } });
        expect(mockRatingFunction).toHaveBeenCalledTimes(1);
    });
});
