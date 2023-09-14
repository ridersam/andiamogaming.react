import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import mobile from "../app/assets/img/gamingmobilethin.png";
import retro from "../app/assets/img/gamingretrothin.png";
import vr from '../app/assets/img/gamingvrthin.png';
import pc from '../app/assets/img/gaminpcthin.png';

const items = [
    {
        src: mobile,
        altText: 'On the Go',
        caption: 'On the Go',
    },
    {
        src: retro,
        altText: 'In the Bar',
        caption: 'In the Bar',
    },
    {
        src: pc,
        altText: 'At your Desk',
        caption: 'At your Desk',
    },
    {
        src: vr,
        altText: 'Game Anywhere',
        caption: 'Game Anywhere',
    },
];

class GameCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.gotoIndex = this.gotoIndex.bind(this);
        this.OnExiting = this.OnExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    OnExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    gotoIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } =this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionHeader={itwem.caption} />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.gotoIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

export default GameCarousel;