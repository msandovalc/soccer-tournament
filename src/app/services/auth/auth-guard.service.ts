import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {

    constructor() {
    }

    canActivate() {
        console.log('Le guard a bien été appelé !');
        return true;
    }
}
