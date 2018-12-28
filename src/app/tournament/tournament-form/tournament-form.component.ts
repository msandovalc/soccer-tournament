import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Tournament} from '../tournament';
import {TournamentService} from '../../services/tournament/tournament.service';

@Component({
    selector: 'app-tournament-form',
    templateUrl: './tournament-form.component.html',
    styleUrls: ['./tournament-form.component.scss']
})
export class TournamentFormComponent implements OnInit {

    @Input() tournament: Tournament;
    // pool: Array<string>;
    isAddForm: boolean;

    constructor(private tS: TournamentService, private router: Router) {
    }

    ngOnInit() {
        this.isAddForm = this.router.url.includes('add');
    }

    onSubmit(): void {
        if (this.isAddForm) {
            this.tS.addTournament(this.tournament);
        } else {
            this.tS.updateTournament(this.tournament).subscribe(_ => this.goBack());
        }
        this.goBack();
    }

    // onSubmit(): void {
    //     if (this.isAddForm) {
    //         this.tS.addTournament(this.tournament).subscribe(tournament => {
    //             this.tournament = tournament;
    //             this.goBack();
    //         });
    //     } else {
    //         this.tS.updateTournament(this.tournament).subscribe(_ => this.goBack());
    //     }
    // }

    goBack(): void {
        let link = ['/tournament'];
        this.router.navigate(link);
    }
}
