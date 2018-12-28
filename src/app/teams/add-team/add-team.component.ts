import {Component, OnInit} from '@angular/core';
import {Team} from '../team';

@Component({
    selector: 'app-add-team',
    templateUrl: './add-team.component.html',
    styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
    team: Team = null;

    constructor() {
    }

    ngOnInit() {
        this.team = new Team();
    }

}
