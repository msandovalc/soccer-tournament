import {Pool} from '../pools/pool';
import {Pools} from '../pools/mock-pool';
import {Tournament} from '../tournament/tournament';
import {Tournaments} from '../tournament/mock-tournament';

export class Team {
    id: number;
    name: string;
    pool: Pool;
    tournament: Tournament;
    created: Date;

    constructor(
        name: string = 'name',
        pool: Pool = Pools[0],
        tournament: Tournament = Tournaments[0],
        created: Date = new Date()) {
        this.name = name;
        this.pool = pool;
        this.tournament = tournament;
        this.created = created;
    }
}