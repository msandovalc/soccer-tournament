import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Teams} from '../../teams/mock-team';
import {Pools} from '../../pools/mock-pool';
import {Tournaments} from '../../tournament/mock-tournament';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const teams = Teams;
        const pools = Pools;
        const tournaments = Tournaments;

        return {teams, pools, tournaments};
    }

    constructor() {
    }
}
