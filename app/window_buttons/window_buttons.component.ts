/**
 * Created by Ziv on 01/03/2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'window-buttons',
    templateUrl: 'app/window_buttons/window_buttons.component.html',
    styles: [`
        .flexbox-container {
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;

            -ms-flex-align: center;
            -webkit-align-items: center;
            -webkit-box-align: center;

            align-items: center;
        }
    `]
})
export class WindowButtonsComponent {

}