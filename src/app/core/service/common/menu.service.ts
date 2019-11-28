import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { MenuModel } from '../../model/shared/menu.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MenuService extends BaseService {
    public getMenuList(): Observable<MenuModel[]> {
        return this.http.get<MenuModel[]>(this.API + 'assets/mock/menu.json');
    }
}
