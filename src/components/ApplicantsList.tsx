import { Button, Col, Container, Row } from "react-bootstrap";
import { User } from "../model/types";
import { UserList } from "./UserList";

interface IApplicantsListProps {
    applicantsRatingList: User[];
    onIncreaseRating: (arg0: number) => void;
    onDecreaseRating: (arg0: number) => void;
    onResetRating: (arg0: number) => void;
    onRefreshAll: () => void;
    onAddUsers: () => void;
}

export const ApplicantsList = (props: IApplicantsListProps) => {
    const refreshAll = () => {
        props.onRefreshAll();
    };
    const addUsers = () => {
        props.onAddUsers();
    };

    return (
        <Container>
            <Row xs="auto">
                <Col>
                    <Button variant="primary" onClick={refreshAll}>
                        Refresh all
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={addUsers}>
                        Next page
                    </Button>
                </Col>
            </Row>
            <Row>
                <UserList
                    userRatingList={props.applicantsRatingList}
                    onIncreaseRating={props.onIncreaseRating}
                    onDecreaseRating={props.onDecreaseRating}
                    onResetRating={props.onResetRating}
                />
            </Row>
        </Container>
    );
};
