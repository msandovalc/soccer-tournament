import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TeamsComponent} from './teams/teams.component';
import {AddTeamComponent} from './teams/add-team/add-team.component';
import {DetailTeamComponent} from './teams/detail-team/detail-team.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EditTeamComponent} from './teams/edit-team/edit-team.component';
import {TournamentComponent} from './tournament/tournament.component';
import {AddTournamentComponent} from './tournament/add-tournament/add-tournament.component';

import {AuthGuardService} from './services/auth/auth-guard.service';
import {DetailTournamentComponent} from './tournament/detail-tournament/detail-tournament.component';
import {EditTournamentComponent} from './tournament/edit-tournament/edit-tournament.component';

const routes: Routes = [
    {
        path: 'team',
        canActivate: [AuthGuardService],
        children: [
            {path: 'add', component: AddTeamComponent},
            {path: ':id', component: DetailTeamComponent},
            {path: 'edit/:id', component: EditTeamComponent}
        ]
    },
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'tournament', component: TournamentComponent},
    {path: 'tournament/add', component: AddTournamentComponent},
    {path: 'tournament/:id', component: DetailTournamentComponent},
    {path: 'tournament/edit/:id', component: EditTournamentComponent},
    {path: 'teams', component: TeamsComponent},
    {path: '**', component: PageNotFoundComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}