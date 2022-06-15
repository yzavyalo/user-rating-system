import { Container } from "react-bootstrap";

export const Footer = () => {
    return (
        <footer
            className="text-muted py-5"
            style={{ backgroundColor: "black" }}
        >
            <Container>
                <p className="float-right">
                    <a href="#">Back to top</a>
                </p>
                <p>User rating systeb example is &copy; by Iuliia Bachoi</p>
            </Container>
        </footer>
    );
};
