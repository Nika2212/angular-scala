import { Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { MenuModel } from '../../../../core/model/shared/menu.model';

@Component({
    selector: 'bs-menu-node',
    templateUrl: 'menu-node.component.html',
    styleUrls: ['menu-node.component.css']
})

export class MenuNodeComponent implements OnChanges {
    @ViewChild('childrenContainerRef', {static: true}) public childrenContainerRef: ElementRef;
    @Input() public children: MenuModel[];
    @Input() public expanded: boolean;
    @Input() public padding: number;

    constructor(private renderer: Renderer2) {}

    public onToggle(route: MenuModel): void {
        if (route.children) {
            route.expanded = !route.expanded;
            if (!route.expanded) {
                this.collapseChildrenRecursive(route.children);
            }
        }
    }
    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.expanded) {
            if (this.expanded) {
                this.renderer.setStyle(this.childrenContainerRef.nativeElement, 'display', 'block');
                this.renderer.setStyle(this.childrenContainerRef.nativeElement, 'height', 'auto');
            } else {
                this.renderer.setStyle(this.childrenContainerRef.nativeElement, 'height', 0 + 'px');
                this.renderer.setStyle(this.childrenContainerRef.nativeElement, 'display', 'none');
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
