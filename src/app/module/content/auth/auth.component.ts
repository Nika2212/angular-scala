import { Component, OnInit } from '@angular/core';
import { images } from '../../../core/shortcut';
import { CredentialsModel } from '../../../core/model/shared/credentials.model';
import { AuthService } from '../../../core/service/auth/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../../../core/model/shared/user.model';

@Component({
    selector: 'bs-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    public images: string = images;
    public userCredentials: CredentialsModel;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    public ngOnInit() {
        this.userCredentialsReset();
    }
    public onSubmit(): void {
        const userLoginSubscription = this.authService.userLogin(this.userCredentials).subscribe((user: UserModel) => {
            this.authService.setCurrentUser(user);
            this.router.navigate(['main']).then(() => userLoginSubscription.unsubscribe());
        });
    }

    private userCredentialsReset(): void {
        this.userCredentials = new CredentialsModel();
    }
}
