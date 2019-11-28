import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main-routes';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule {}
