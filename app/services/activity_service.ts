/**
 * Created by Liran on 02/03/2016.
 */
import {Injectable} from 'angular2/core';

@Injectable()
export class ActivityService {
    sequenceIdNum: number;
    arrActivityMissions: any;
    items:Array<any>;

    constructor() {
        this.arrActivityMissions = [];
        this.sequenceIdNum = 0;
    }

    getSequenceId(): number {
        this.sequenceIdNum += 1;
        return this.sequenceIdNum;
    }

    getActivityMissions() {
        return this.arrActivityMissions;
    }

    addMission() {
        var mission1 = {
            id: "mission" + this.getSequenceId(),
            iconClass: "zmdi zmdi-flower-alt",
            tooltipText: "someText"
        }

        this.arrActivityMissions.push(mission1);
    }
}