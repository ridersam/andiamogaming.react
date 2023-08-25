import shooter from '../assets/img/shootergame.png';
import stray from '../assets/img/stray.jpg';
import fallFlat from '../assets/img/fallflat.jpg';

export const GAMES = [
    {
        id: 0,
        name: 'Shooter',
        image: shooter,
        released: 2021,
        featured: false,
        description:
            'Protect the world from the crusades of evil underground organizations.'
    },
    {
        id: 1,
        name: 'Stray',
        image: stray,
        released: 2022,
        featured: true,
        description:
            'Live the life of a small hosue cat in the future. Take a stroll through th streets, or take a nap in the sheets.'
    },
    {
        id: 2,
        name: 'Human Fall Flat',
        image: fallFlat,
        released: 2020,
        featured: false,
        description:
            'Cooperate with friends or explore on your own. Solve each stage of puzzles and experience this dream like world for all it has to offer.'
    },
];