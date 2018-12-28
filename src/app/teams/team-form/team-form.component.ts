import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TeamService} from '../../services/team/team.service';
import {Team} from '../team';
import {Pool} from '../../pools/pool';

@Component({
    selector: 'app-team-form',
    templateUrl: './team-form.component.html',
    styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {

    @Input() team: Team;
    pools: any;
    pool: Pool;
    // pool:Pool = [];
    isAddForm: boolean;
    checked: false;
    selectedValue = null;

    constructor(private teamService: TeamService, private router: Router) {
    }

    ngOnInit() {
        // this.pool = this.teamService.getPools();
        this.teamService.getPools().subscribe(pools => this.pools = pools);
        console.log(this.pools);

        this.isAddForm = this.router.url.includes('add');
    }

    // hasPool(pool: any): boolean {
    //     let index = this.pool;
    //     let index = this.team.pool.id.indexOf(pool.id);
    //     if (~index) return true;
    //     return false;
    // }

    // selectPool($event: any, pool: any): void {
    //     let checked = $event.target.checked;
    //
    //     if (checked) {
    //         this.team.pool.push(pool);
    //     } else {
    //         let index = this.team.pool.indexOf(pool);
    //         if (~index) {
    //             this.team.pool.splice(index, 1);
    //         }
    //     }
    // }

    // isPoolValid(pool: string): boolean {
    //     if (this.team.pool.length === 1 && this.hasPool(pool)) {
    //         return false;
    //     }
    //     if (this.team.pool.length >= 3 && !this.hasPool(pool)) {
    //         return false;
    //     }
    //     return true;
    // }


    // onSubmit(): void {
    //     this.teamService.updateTeam(this.team).subscribe(() => this.goBack());
    // }


    onSubmit(): void {
        if (this.isAddForm) {
            this.teamService.addTeam(this.team).subscribe(team => {
                console.log(this.team);
                this.team = team;
                this.goBack();
            });
        } else {
            this.teamService.updateTeam(this.team).subscribe(_ => this.goBack());
        }
    }

    goBack(): void {
        let link = ['/team', this.team.id];
        this.router.navigate(link);
    }


}