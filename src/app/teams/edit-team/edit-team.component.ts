import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Team} from '../team';

import {TeamService} from '../../services/team/team.service';

@Component({
    selector: 'app-edit-team',
    templateUrl: './edit-team.component.html',
    styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {
    team: Team = null;

    constructor(private teamService: TeamService, private route: ActivatedRoute ) {
    }

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.teamService.getTeam(id).subscribe(team => this.team = team);
    }

}
