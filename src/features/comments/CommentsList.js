import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentByGameId } from "./commentsSlice";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";

const CommentsList = ({gameId}) => {
    const comments = useSelector(selectCommentByGameId(gameId));

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className="m-1" style={{ color: "aliceblue" }} >
                <h4 style={{ color: "#AFBE8F" }} >Comments</h4>
                {comments.map((comment) => {
                    return  <Comment key={comment.id} comment={comment} />
                })}
                <CommentForm gameId={gameId} />
            </Col>
        );
    }
    return (
        <Col md='5' className="m-1" style={{ color: "aliceblue" }} >There are no comments for this game yet.</Col>
    );
};

export default CommentsList;