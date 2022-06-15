import { Col, Container, Row } from "react-bootstrap";
import { Greetings } from "./Greetings";
import {
    getUserRatingList,
    getDiligentUsers,
    getSuspiciousUsers,
    getUnsortedUsers
} from "../model/usersAPI";
import { useAppSelector, useAppDispatch } from "../model/hooks";
import { useEffect } from "react";
import { fetchUsers, getUsersFromAPI } from "../model/usersAPI";
import {
    addUsers,
    increaseRating,
    decreaseRating,
    resetRating
} from "../model/usersStore";
import { ApplicantsList } from "./ApplicantsList";
import { RatingTabs } from "./RatingTabs";
import { User } from "../model/types";

export const Main = () => {
    const userRatingList = useAppSelector(getUserRatingList);
    const userUnsortedList = useAppSelector(getUnsortedUsers);
    const diligentRatingList = useAppSelector(getDiligentUsers);
    const suspiciousRatingList = useAppSelector(getSuspiciousUsers);

    const dispatch = useAppDispatch();

    const onIncreaseRating = (userId: number) => {
        const user = userRatingList.find((user) => user.id === userId);
        if (user) {
            dispatch(increaseRating(userId));
        }
    };

    const onDecreaseRating = (userId: number) => {
        const user = userRatingList.find((user) => user.id === userId);
        if (user) {
            dispatch(decreaseRating(userId));
        }
    };

    const onResetRating = (userId: number) => {
        const user = userRatingList.find((user) => user.id === userId);
        if (user) {
            dispatch(resetRating(userId));
        }
    };

    const refreshAll = () => {
        dispatch(fetchUsers());
    };
    const addNewUsers = () => {
        let newUsers: User[] = [];
        getUsersFromAPI().then((response) => {
            newUsers = response;
            console.log(newUsers);
            dispatch(addUsers(newUsers));
        });
    };

    useEffect(() => {
        dispatch(fetchUsers());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <main role="main">
            <Greetings />
            <Container fluid>
                <Row>
                    <Col sm={6}>
                        <ApplicantsList
                            applicantsRatingList={userUnsortedList}
                            onIncreaseRating={onIncreaseRating}
                            onDecreaseRating={onDecreaseRating}
                            onResetRating={onResetRating}
                            onRefreshAll={refreshAll}
                            onAddUsers={addNewUsers}
                        />
                    </Col>
                    <Col sm={6}>
                        <RatingTabs
                            diligentRatingList={diligentRatingList}
                            suspiciousRatingList={suspiciousRatingList}
                            onIncreaseRating={onIncreaseRating}
                            onDecreaseRating={onDecreaseRating}
                            onResetRating={onResetRating}
                        />
                    </Col>
                </Row>
            </Container>
        </main>
    );
};
