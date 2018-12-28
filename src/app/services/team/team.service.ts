import {Injectable} from '@angular/core';

import {Team} from '../../teams/team';
import {Teams} from '../../teams/mock-team';

import {Pool} from '../../pools/pool';
import {Pools} from '../../pools/mock-pool';

import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TeamService {
    private teamsUrl = 'api/teams';
    private poolUrl = 'api/pools';
    private tournamentUrl = 'api/tournaments';


    constructor(private http: HttpClient) {
    }

    getTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(this.teamsUrl).pipe(
            tap(_ => this.log(`fetched teams`)),
            catchError(this.handleError('getTeams', [])));
    }

    getTeam(id: number): Observable<Team> {
        const url = `${this.teamsUrl}/${id}`; // syntaxe ES6

        return this.http.get<Team>(url).pipe(
            tap(_ => this.log(`fetched Team id=${id}`)),
            catchError(this.handleError<Team>(`getTeam id=${id}`))
        );
    }

    getPools(): Observable<Pool[]> {
        return this.http.get<Pool[]>(this.poolUrl).pipe(
            tap(_ => this.log(`fetched pools`)),
            catchError(this.handleError('getPools', [])));
    }

    getPool(id: number): Observable<Pool> {
        const url = `${this.teamsUrl}/${id}`; // syntaxe ES6

        return this.http.get<Pool>(url).pipe(
            tap(_ => this.log(`fetched Pool id=${id}`)),
            catchError(this.handleError<Team>(`getPool id=${id}`))
        );
    }

    updateTeam(team: Team): Observable<Team> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        return this.http.put(this.teamsUrl, team, httpOptions).pipe(
            tap(_ => this.log(`updated team id=${team.id}`)),
            catchError(this.handleError<any>('updateTeam'))
        );
    }

    deleteTeam(team: Team): Observable<Team> {
        const url = `${this.teamsUrl}/${team.id}`;
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        return this.http.delete<Team>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted team id=${team.id}`)),
            catchError(this.handleError<Team>('deleteTeam'))
        );
    }

    addTeam(team: Team): Observable<Team> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        return this.http.post<Team>(this.teamsUrl, team, httpOptions).pipe(
            tap((team: Team) => this.log(`added team with id=${team.id}`)),
            catchError(this.handleError<Team>('addTeam'))
        );
    }


    private log(log: string) {
        console.info(log);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);

            return of(result as T); // je donne des explications of un peu plus tard. 07 }
        };
    }
}
