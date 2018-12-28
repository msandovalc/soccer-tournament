import {Injectable} from '@angular/core';
import {Tournament} from '../../tournament/tournament';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Team} from '../../teams/team';


@Injectable({
    providedIn: 'root'
})
export class TournamentService {
    private tournamentUrl = 'api/tournaments';

    constructor(private http: HttpClient) {
    }

    getTournaments(): Observable<Tournament[]> {
        return this.http.get<Tournament[]>(this.tournamentUrl).pipe(
            tap(_ => this.log(`fetched Tournaments`)),
            catchError(this.handleError('getTournaments', [])));
    }

    getTournament(id: number): Observable<Tournament> {
        const url = `${this.tournamentUrl}/${id}`; // syntaxe ES6

        return this.http.get<Tournament>(url).pipe(
            tap(_ => this.log(`fetched Team id=${id}`)),
            catchError(this.handleError<Tournament>(`getTournament id=${id}`))
        );
    }

    addTournament(tournament: Tournament): Observable<Tournament> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        return this.http.post<Tournament>(this.tournamentUrl, tournament, httpOptions).pipe(
            tap((tournament: Tournament) => this.log(`added tournament with id=${tournament.id}`)),
            catchError(this.handleError<Tournament>('addTournament'))
        );
    }

    updateTournament(tournament: Tournament): Observable<Tournament> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        return this.http.put(this.tournamentUrl, tournament, httpOptions).pipe(
            tap(_ => this.log(`updated tournament id=${tournament.id}`)),
            catchError(this.handleError<any>('updateTournament'))
        );
    }

    deleteTournament(tournament: Tournament): Observable<Tournament> {
        const url = `${this.tournamentUrl}/${tournament.id}`;
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        return this.http.delete<Tournament>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted tournament id=${tournament.id}`)),
            catchError(this.handleError<Tournament>('deleteTournament'))
        );
    }


    private log(log: string) {
        console.info(log);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }
}
