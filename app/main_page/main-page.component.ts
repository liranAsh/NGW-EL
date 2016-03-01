/**
 * Created by Liran on 01/03/2016.
 */
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {DrawerPanelComponent} from '../drawer-panel/drawer-panel.component';
import {ActivityPanelComponent} from '../activity_panel/activity-panel.component';
import 'rxjs/Rx';

@Component({
    selector: 'main-page',
    templateUrl: 'app/main_page/main-page.component.html',
    directives:[DrawerPanelComponent, ActivityPanelComponent]
})
export class MainPageComponent implements OnInit{
    ngOnInit():any {

    }
}