import {Tournament} from './tournament';
import {Pools} from '../pools/mock-pool';
import {Teams} from '../teams/mock-team';

export const Tournaments: Tournament[] = [
    {
        id: 0,
        name: 'Tournois U-11',
        pool: Pools[0],
        team: Teams[0],
        created: new Date()
    },
    {
        id: 1,
        name: 'Tournois U-13',
        pool: Pools[0],
        team: Teams[0],
        created: new Date()
    },
];