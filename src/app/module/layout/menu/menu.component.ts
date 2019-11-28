import { Component, OnInit } from '@angular/core';
import { images } from '../../../core/shortcut';
import { MenuService } from '../../../core/service/common/menu.service';
import { MenuModel } from '../../../core/model/shared/menu.model';

@Component({
    selector: 'bs-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    public images: string = images;
    public menuList: MenuModel[] = [];

    constructor(private menuService: MenuService) {}

    public ngOnInit() {
        this.menuService.getMenuList().subscribe((menuList: MenuModel[]) => this.menuList = menuList);
    }
    public onToggle(route: MenuModel): void {
        if (route.children) {
            route.expanded = !route.expanded;
            if (!route.expanded) {
                this.collapseChildrenRecursive(route.children);
            }
        }
    }

    private collapseChildrenRecursive(children: MenuModel[]): void {
        for (const child of children) {
            child.expanded = false;
            if (child.children && child.children.length > 0) {
                this.collapseChildrenRecursive(child.children);
            }
        }
    }
}
