import { UserCard } from "./UserCard";
import { Container } from "react-bootstrap";
import { User } from "../model/types";

interface IUserListProps {
    userRatingList: User[];
    onIncreaseRating: (arg0: number) => void;
    onDecreaseRating: (arg0: number) => void;
    onResetRating: (arg0: number) => void;
}

export const UserList = (props: IUserListProps) => {
    return (
        <Container
            fluid
            style={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 0,
                paddingRight: 0
            }}
        >
            {props.userRatingList.map((user) => {
                return (
                    <UserCard
                        user={user}
                        onIncreaseRating={props.onIncreaseRating}
                        onDecreaseRating={props.onDecreaseRating}
                        onResetRating={props.onResetRating}
                    />
                );
            })}
        </Container>
    );
};
