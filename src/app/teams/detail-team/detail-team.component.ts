import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Team} from '../team';
import {Teams} from '../mock-team';
import {TeamService} from '../../services/team/team.service';

@Component({
    selector: 'app-detail-team',
    templateUrl: './detail-team.component.html',
    styleUrls: ['./detail-team.component.scss']
})
export class DetailTeamComponent implements OnInit {
    teams: Team[] = null;
    team: Team = null;

    constructor(private route: ActivatedRoute, private router: Router, private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.teams = Teams;
        // this.teamService.getTeam(id);

        let id = +this.route.snapshot.paramMap.get('id');

        this.teamService.getTeam(id).subscribe(team => this.team = team);

        for (let i = 0; i < this.teams.length; i++) {
            if (this.teams[i].id == id) {
                this.team = this.teams[i];
                console.log(this.team);
            }
        }
    }

    goBack(): void {
        this.router.navigate(['/teams']);
    }

    goEdit(team: Team): void {
        let link = ['/team/edit', team.id];
        this.router.navigate(link);
    }

    delete(team: Team): void {
        this.teamService.deleteTeam(team).subscribe(_ => this.goBack());
    }

}
