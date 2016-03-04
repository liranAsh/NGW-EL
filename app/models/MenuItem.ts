/**
 * Created by Liran on 04/03/2016.
 */
export class MenuItem {

    iconName: string;
    bIsCollapse: boolean;
    link: string;
    displayText: string;

    constructor(displayText:string, bIsCollapse:boolean, link?: string, iconName?:string) {

        this.displayText = displayText;
        this.bIsCollapse = bIsCollapse;
        this.link = link;
        this.iconName = iconName;
    }
}