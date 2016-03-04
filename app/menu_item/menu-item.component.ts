/**
 * Created by Liran on 03/03/2016.
 */
import {Component, OnInit, Input} from 'angular2/core';

@Component({
    selector: 'menu-item',
    templateUrl: 'app/menu_item/menu-item.component.html'
})
export class MenuItemComponent {

    @Input() item;
    constructor(){}
}