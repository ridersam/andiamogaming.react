import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectGameById } from "../games/gamesSlice";
import GameDetail from "../games/GameDetail";
import GameSubHeader from "../../components/GameSubHeader";

const GameDetailPage = () => {
    const {gameId} = useParams();
    const game = selectGameById(gameId);

    return (
        <Container>
            <GameSubHeader current={game.name} detail={true} />
            <Row>
                <GameDetail game={game} />
            </Row>
        </Container>
    );
};

export default GameDetailPage;