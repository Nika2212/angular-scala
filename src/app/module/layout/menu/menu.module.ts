import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuNodeComponent } from './menu-node/menu-node.component';
import { StopPropagationDirective } from '../../../core/directive/common/stop-propaganation.directive';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [MenuComponent, MenuNodeComponent, StopPropagationDirective],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [MenuComponent]
})

export class MenuModule { }
