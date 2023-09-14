import { Container, Row } from 'reactstrap';
import DisplayList from '../display/DisplayList';
import SubHeader from '../../components/SubHeader';
import HomeCarousel from '../../components/HomeCarousel';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <DisplayList />
        </Container>
    );
};

export default HomePage;