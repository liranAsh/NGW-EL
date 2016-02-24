/**
 * Created by Liran on 23/02/2016.
 */
import {Component} from 'angular2/core';
import {IDataTable} from '../interfaces/IDataTable';

@Component({
    selector: 'log-operation',
    templateUrl: 'app/log_operations/log.operations.html'
})



export class LogOperations {

    // Data members
    public arrData: IDataTable[];

    constructor() {
        this.arrData = [];
        this.addGarbageData();
    }

    getSignleGarbageData(data: IDataTable): IDataTable {
        var tempData = <IDataTable>{};

        tempData.operationName = data.operationName;
        tempData.date = data.date;

        return tempData;
    }

    addGarbageData() {

        var data1 = this.getSignleGarbageData({
            operationName: "Liran",
            date: 1316546
        });

        var data2 = this.getSignleGarbageData({
            operationName: "Ziv",
            date: 498215
        })

        this.arrData.push(data1, data2);
    }
}