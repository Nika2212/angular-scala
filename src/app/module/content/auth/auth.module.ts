import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth-routes';
import { AuthComponent } from './auth.component';



@NgModule({
    declarations: [AuthComponent],
    imports: [
      CommonModule,
      RouterModule.forChild(authRoutes)
    ],
    exports: [AuthComponent]
})
export class AuthRoutingModule { }
