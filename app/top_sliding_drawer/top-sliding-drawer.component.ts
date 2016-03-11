/**
 * Created by Liran on 03/03/2016.
 */
import {Component} from 'angular2/core';
import {ActivityService} from '../services/activity_service';

@Component({
    selector: 'top-sliding-drawer',
    templateUrl: 'app/top_sliding_drawer/top-sliding-drawer.component.html',
    directives: [],
    styles: [`
        .dropdown-screen {
            background-color: grey;
            width: 100vw;
        }
    `]
})
export class TopSlidingDrawer {
    isDropDownOpen: boolean;

    constructor() {
        this.isDropDownOpen = false;
    }

    whenClickDropdownOpen() {
        this.isDropDownOpen = !this.isDropDownOpen;
        this.closeContainerWhenClickOutside(this);
    }

    closeContainerWhenClickOutside(thisComp) {
        var self = thisComp;
        var eventWhenMouseUp = function (e) {
            var container = $("#bodyDropDown");

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {

                self.isDropDownOpen = !self.isDropDownOpen;
                $(document).unbind('mouseup');
            }
        };


        // JQuery code
        $(document).mouseup(eventWhenMouseUp);
    }
}