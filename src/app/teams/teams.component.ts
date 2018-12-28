import {Component, Input, OnInit} from '@angular/core';
import {Team} from './team';
import {ActivatedRoute, Router} from '@angular/router';

import {TeamService} from '../services/team/team.service';
import {TournamentService} from '../services/tournament/tournament.service';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
    @Input() teams: any;


    constructor(private route: ActivatedRoute,
                private teamService: TeamService,
                private tournamentService: TournamentService,
                private router: Router){
    }

    ngOnInit() {
        this.getTeams();
    }

    getTeams(): void {
        // this.teamService.getTeams().subscribe(teams => this.teams = teams);

        let id = +this.route.snapshot.paramMap.get('id');

        this.tournamentService.getTournament(id).subscribe(tournament => {
            this.teams = tournament.team;
            console.log(this.teams);
        });


        // this.tournamentService.getTournamentTeam(0).subscribe(teams => {this.teams = teams; console.log(this.teams);});
    }

    selectTeam(team: Team): void {
        let link = ['/team/', team.id];
        this.router.navigate(link);
    }

    goEdit(team: Team): void {
        let link = ['/team/edit', team.id];
        this.router.navigate(link);
    }

    delete(team: Team): void {
        this.teamService.deleteTeam(team).subscribe(_ => this.goBack());
    }

    goBack(): void {
        this.router.navigate(['/dashboard']);
    }

}
