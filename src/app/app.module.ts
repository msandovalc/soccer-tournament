import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data/in-memory-data.service';
import {AuthGuardService} from './services/auth/auth-guard.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TeamsComponent} from './teams/teams.component';
import {PoolsComponent} from './pools/pools.component';
import {ResultsComponent} from './results/results.component';
import {RankingComponent} from './ranking/ranking.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {AddTeamComponent} from './teams/add-team/add-team.component';
import {TeamFormComponent} from './teams/team-form/team-form.component';
import {DetailTeamComponent} from './teams/detail-team/detail-team.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';

import {TeamService} from './services/team/team.service';
import { EditTeamComponent } from './teams/edit-team/edit-team.component';
import { TournamentComponent } from './tournament/tournament.component';
import { AddTournamentComponent } from './tournament/add-tournament/add-tournament.component';
import { EditTournamentComponent } from './tournament/edit-tournament/edit-tournament.component';
import {TournamentService} from './services/tournament/tournament.service';
import { TournamentFormComponent } from './tournament/tournament-form/tournament-form.component';
import { AddPoolsComponent } from './pools/add-pools/add-pools.component';
import { EditPoolsComponent } from './pools/edit-pools/edit-pools.component';
import { DetailPoolComponent } from './pools/detail-pool/detail-pool.component';
import { PoolFormComponent } from './pools/pool-form/pool-form.component';
import { DetailTournamentComponent } from './tournament/detail-tournament/detail-tournament.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        TeamsComponent,
        PoolsComponent,
        ResultsComponent,
        RankingComponent,
        NavbarComponent,
        AddTeamComponent,
        TeamFormComponent,
        DetailTeamComponent,
        PageNotFoundComponent,
        EditTeamComponent,
        TournamentComponent,
        AddTournamentComponent,
        EditTournamentComponent,
        TournamentFormComponent,
        AddPoolsComponent,
        EditPoolsComponent,
        DetailPoolComponent,
        PoolFormComponent,
        DetailTournamentComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{ dataEncapsulation: false }),
        FormsModule
    ],
    providers: [TeamService, TournamentService, AuthGuardService ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
