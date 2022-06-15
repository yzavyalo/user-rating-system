import { useState } from "react";
import {
    Button,
    Card,
    Col,
    Container,
    ListGroup,
    Modal,
    Row
} from "react-bootstrap";
import { User } from "../model/types";

interface IUserCardProps {
    user: User;
    onIncreaseRating: (arg0: number) => void;
    onDecreaseRating: (arg0: number) => void;
    onResetRating: (arg0: number) => void;
}

export const UserCard = (props: IUserCardProps) => {
    const [rewardShow, setRewardShow] = useState(false);
    const [banShow, setBanShow] = useState(false);

    const increaseRating = () => {
        props.onIncreaseRating(props.user.id);
    };

    const decreaseRating = () => {
        props.onDecreaseRating(props.user.id);
    };

    const resetRating = () => {
        props.onResetRating(props.user.id);
    };

    return (
        <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={props.user.avatar} />
            <Card.Body>
                <Card.Title>
                    {props.user.first_name} {props.user.last_name}
                </Card.Title>
                <Card.Text>
                    {props.user.employment.title} <br />
                    {props.user.employment.key_skill} <br />
                    Rating{" "}
                    {props.user.rating ? props.user.rating.toString() : ""}
                </Card.Text>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            {props.user.rating === 0 ? (
                                <Button
                                    variant="info"
                                    onClick={() => {
                                        resetRating();
                                    }}
                                >
                                    Del
                                </Button>
                            ) : (
                                ""
                            )}
                        </Col>
                        <Col>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    increaseRating();
                                    if (props.user.rating === 4)
                                        setRewardShow(true);
                                }}
                                disabled={
                                    props.user.rating === 5 ? true : false
                                }
                            >
                                +
                            </Button>
                            <Modal
                                show={rewardShow}
                                onHide={() => setRewardShow(false)}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Body>
                                    Need to reward {props.user.first_name}{" "}
                                    {props.user.last_name}. To do this?"
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={() => setRewardShow(false)}
                                    >
                                        No
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() => {
                                            setRewardShow(false);
                                            resetRating();
                                        }}
                                    >
                                        Yes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                        <Col>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    decreaseRating();
                                    if (props.user.rating === -4)
                                        setBanShow(true);
                                }}
                                disabled={
                                    props.user.rating === -5 ? true : false
                                }
                            >
                                -
                            </Button>
                            <Modal
                                show={banShow}
                                onHide={() => setBanShow(false)}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Body>
                                    Time to ban {props.user.first_name}{" "}
                                    {props.user.last_name}. To do this?"
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={() => setBanShow(false)}
                                    >
                                        No
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() => {
                                            setBanShow(false);
                                            resetRating();
                                        }}
                                    >
                                        Yes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Card.Link href={`maito:${props.user.email}`}>
                        {props.user.email}
                    </Card.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Card.Link href={`tel:+${props.user.phone_number}`}>
                        {props.user.phone_number}
                    </Card.Link>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
};
