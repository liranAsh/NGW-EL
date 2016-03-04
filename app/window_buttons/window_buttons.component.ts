/**
 * Created by Ziv on 01/03/2016.
 */
import {Component} from 'angular2/core';
import BrowserWindow = Electron.BrowserWindow;

@Component({
    selector: 'window-buttons',
    templateUrl: 'app/window_buttons/window_buttons.component.html',
    styles: [
        `.windowButton {
                color: white;
                text-align: -webkit-center;
                margin-top: 0.5vh;
                position:relative;
            }`
    ]
})
export class WindowButtonsComponent {

    //browserWindowInstance : BrowserWindow;
    browserWindowInstance : any;

    constructor() {
        //this.browserWindowInstance = require('remote').getCurrentWindow();
        this.browserWindowInstance = {};
    }

    toggleResize() : void {
        debugger;
        (this.browserWindowInstance.isMaximized()) ? this.browserWindowInstance.unmaximize() : this.browserWindowInstance.maximize();
    }

    close() : void {
        this.browserWindowInstance.close();
    }

    minimize() : void {
        this.browserWindowInstance.minimize();
    }
}