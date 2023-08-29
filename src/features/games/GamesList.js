import { Col, Row } from "reactstrap";
import GameCard from "./GameCard";
import { selectAllGames } from "./gamesSlice";

const GamesList = () => {
    const games = selectAllGames();
    return (
        <Row className="ms-auto, text-center">
            {games.map((game) => {
                return (
                    <Col
                    md='3'
                    className="m-4"
                    key={game.id}
                    >
                        <GameCard game={game}/>
                    </Col>
                );
            })}

        </Row>
    )
}

export default GamesList;