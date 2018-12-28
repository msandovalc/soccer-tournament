import {Pool} from '../pools/pool';
import {Pools} from '../pools/mock-pool';

import {Team} from '../teams/team';
import {Teams} from '../teams/mock-team';

export class Tournament {
    id: number;
    name: string;
    pool: Pool;
    team: Team;
    created: Date;

    constructor(
        name: string = 'name',
        pool: Pool = Pools[0],
        team: Team = Teams[0],
        created: Date = new Date()) {
        this.name = name;
        this.pool = pool;
        this.team = team;
        this.created = created;
    }
}