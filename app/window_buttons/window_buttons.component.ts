/**
 * Created by Ziv on 01/03/2016.
 */
import {Component} from 'angular2/core';
import BrowserWindow = Electron.BrowserWindow;
debugger;
var browserWindowInstance : BrowserWindow = require('remote').getCurrentWindow();

@Component({
    selector: 'window-buttons',
    templateUrl: 'app/window_buttons/window_buttons.component.html'
})
export class WindowButtonsComponent {

    toggleResize() : void {
        debugger;
        (browserWindowInstance.isMaximized()) ? browserWindowInstance.unmaximize() : browserWindowInstance.maximize();
    }

    close() : void {
        browserWindowInstance.close();
    }

    minimize() : void {
        browserWindowInstance.minimize();
    }
}