import {Component, OnInit} from '@angular/core';
import {Tournament} from '../tournament';
import {ActivatedRoute, Router} from '@angular/router';
import {TeamService} from '../../services/team/team.service';
import {Teams} from '../../teams/mock-team';
import {TournamentService} from '../../services/tournament/tournament.service';
import {Team} from '../../teams/team';

@Component({
    selector: 'app-detail-tournament',
    templateUrl: './detail-tournament.component.html',
    styleUrls: ['./detail-tournament.component.scss']
})
export class DetailTournamentComponent implements OnInit {
    tournaments: Tournament[] = null;
    tournament: Tournament = null;
    teams: any;

    constructor(private route: ActivatedRoute, private router: Router, private tournamentService: TournamentService) {
    }

    ngOnInit(): void {
        // this.tournament = Tournament;
        // this.teamService.getTeam(id);

        let id = +this.route.snapshot.paramMap.get('id');

        this.tournamentService.getTournament(id).subscribe(tournament => {
            this.tournament = tournament;
            this.teams = tournament.team;
            console.log(this.tournament.team);
        });

        // for (let i = 0; i < this.tournaments.length; i++) {
        //     if (this.tournaments[i].id == id) {
        //         this.tournament = this.tournaments[i];
        //         console.log(this.tournament);
        //     }
        // }
    }

    goBack(): void {
        this.router.navigate(['/tournament']);
    }

    // goEdit(tournament: Tournament): void {
    //     let link = ['/team/edit', team.id];
    //     this.router.navigate(link);
    // }
    //
    // delete(tournament: Tournament): void {
    //     this.teamService.deleteTeam(team).subscribe(_ => this.goBack());
    // }
}
