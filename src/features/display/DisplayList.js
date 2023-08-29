import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard.js';
import { selectFeaturedGame } from '../games/gamesSlice';
import { selectFeaturedProduct } from '../products/productsSlice';

const DisplayList = () => {
    const items = [selectFeaturedGame(), selectFeaturedProduct()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;