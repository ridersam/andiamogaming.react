import { Container, Row, Col } from "reactstrap";
import GamesList from "../games/GamesList";
import GameSubHeader from "../../components/GameSubHeader";

const GamePage = () => {
    return (
        <Container>
            <GameSubHeader current='Games' />
            <GamesList />
        </Container>
    );
};

export default GamePage;