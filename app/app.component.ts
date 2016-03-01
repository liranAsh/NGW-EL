import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {MainPageComponent} from './main_page/main-page.component';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: '<main-page></main-page>',
    directives:[MainPageComponent]
})
export class AppComponent implements OnInit{
    ngOnInit():any {

    }
}