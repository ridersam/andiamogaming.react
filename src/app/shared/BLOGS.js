import adventure from '../assets/img/adventuregame.jpg';
import arcade from '../assets/img/gamingarcade.png';
import vr from '../assets/img/gamingvr.png';
import {LoremIpsum} from 'react-lorem-ipsum';

export const BLOGS = [
    {
        id:0,
        name: 'The Importance of Adventures in Open World Games',
        image: adventure,
        published: '9-6-23',
        featured: true,
        description:
            <LoremIpsum p={3}/>,
        author: 'Seth Doogle'
    },
    {
        id: 1,
        name: 'The Classics: An Exploration of Arcade Games',
        published: '8-9-23',
        image: arcade,
        featured: false,
        description:
        <LoremIpsum p={3}/>,
        author: 'John Newcastle'
    },
    {
        id: 2,
        name: 'The Future: Is VR Gaming Here to Stay?',
        published: '7-5-23',
        image: vr,
        featured: false,
        description:
        <LoremIpsum p={3} />,
        author: 'Bob McFarland'
    },
];