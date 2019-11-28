import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MenuModule } from '../../layout/menu/menu.module';
import { HeaderModule } from '../../layout/header/header.module';

@NgModule({
    imports: [CommonModule, MainRoutingModule, MenuModule, HeaderModule],
    declarations: [MainComponent],
    exports: [MainComponent]
})

export class MainModule {}
