import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { CredentialsModel } from '../../model/shared/credentials.model';
import { Observable } from 'rxjs';
import { UserModel } from '../../model/shared/user.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService extends BaseService {
    private currentUser: UserModel;

    public getCurrentUser(): string {
        return this.currentUser.user;
    }
    public getCurrentUserName(): string {
        return this.currentUser.user;
    }
    public getCurrentUserToken(): string {
        return this.currentUser.token;
    }
    public getCurrentUserRole(): string {
        return this.currentUser.role;
    }
    public getCurrentUserPermissions(): string[] {
        return this.currentUser.permissions;
    }

    public setCurrentUser(currentUser: UserModel): void {
        if (this.currentUser) {
            this.currentUser = currentUser;
        }
    }

    public userLogin(credentials: CredentialsModel): Observable<UserModel> {
        return this.http.get<UserModel>(this.API + 'assets/mock/user.json');
    }
    public userLogout(): Observable<boolean> | void {
        return null;
    }
}
