import {Component, OnInit} from '@angular/core';
import {Team} from '../../teams/team';
import {Tournament} from '../tournament';

@Component({
    selector: 'app-add-tournament',
    templateUrl: './add-tournament.component.html',
    styleUrls: ['./add-tournament.component.scss']
})
export class AddTournamentComponent implements OnInit {
    tournament: Tournament = null;
    team: Team = null;

    constructor() {
    }

    ngOnInit() {
        this.tournament = new Tournament();
        this.team = new Team();
    }

}
