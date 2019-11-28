export class MenuModel {
    public name: string;
    public route: string;
    public icon: string;
    public expanded: boolean = false;
    public permission: string[] = [];
    public children: MenuModel[];
    public selected: boolean = false;
}
