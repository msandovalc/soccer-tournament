import {Team} from './team';
import {Pools} from '../pools/mock-pool';
import {Tournaments} from '../tournament/mock-tournament';

export const Teams: Team[] = [
    {
        id: 0,
        name: "Usc GR",
        pool: Pools[0],
        created: new Date()
    },
    {
        id: 1,
        name: "Usc FD",
        pool: Pools[1],
        created: new Date()
    },
    {
        id: 2,
        name: "Usc FD",
        pool: Pools[2],
        created: new Date()
    },
];