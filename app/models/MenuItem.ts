/**
 * Created by Liran on 04/03/2016.
 */
export class MenuItem {

    iconName: string;
    bIsCollapse: boolean;
    link: string;
    displayText: string;
    menuItems: Array<MenuItem>;

    constructor(displayText:string, bIsCollapse:boolean, iconName?:string, link?: string) {

        this.displayText = displayText;
        this.bIsCollapse = bIsCollapse;
        this.link = link;
        this.iconName = iconName;
        this.menuItems = [];
    }

    addMenuItem(item: MenuItem) {
        this.menuItems.push(item);
    }
}