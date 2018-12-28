import {Component, OnInit} from '@angular/core';
import {Tournament} from './tournament';
import {TournamentService} from '../services/tournament/tournament.service';
import {Router} from '@angular/router';
import {Team} from '../teams/team';


@Component({
    selector: 'app-tournament',
    templateUrl: './tournament.component.html',
    styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
    tournaments: Tournament[] = null;

    constructor(private tS: TournamentService, private router: Router) {
    }

    ngOnInit() {
        this.getTournaments();
    }

    getTournaments() {
        this.tS.getTournaments().subscribe(tournaments => {
            this.tournaments = tournaments;
            console.log(this.tournaments);
        });
    }

    selctTournament(tournament: Tournament): void {
        let link = ['/tournament/', tournament.id];
        this.router.navigate(link);
    }
}
