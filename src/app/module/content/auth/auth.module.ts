import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth-routes';
import { AuthComponent } from './auth.component';
import { MatCardModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(authRoutes),
        MatCardModule,
        MatSelectModule,
        MatInputModule,
        MatDividerModule,
        MatButtonModule,
        MatCheckboxModule,
        FormsModule
    ],
    exports: [AuthComponent]
})
export class AuthModule {
}
