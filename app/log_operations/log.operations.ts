///<reference path="../../node_modules/rxjs/Observable.d.ts"/>
///<reference path="../../node_modules/angular2/src/http/http.d.ts"/>
/**
 * Created by Liran on 23/02/2016.
 */
import {Component} from 'angular2/core';
import {IDataTable} from '../interfaces/IDataTable';
import {OnInit} from "../../node_modules/angular2/src/core/linker/interfaces";
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {HTTP_PROVIDERS}    from 'angular2/http';

@Component({
    selector: 'log-operation',
    templateUrl: 'app/log_operations/log.operations.html',
    providers: [
        HTTP_PROVIDERS
    ]
})
export class LogOperations implements OnInit {

    // Data members
    public arrData: IDataTable[];
    public arrBackendData: IDataTable[];

    constructor(private http: Http) {
        this.arrData = [];
        this.addGarbageData();
    }

    ngOnInit():any {
        debugger;
        this.http.get("http://localhost:60416/api/values")
            .map(() => function(res){
                debugger;
                <string[]> res.json();
            }).catch(this.handleError)
            .subscribe(() => function(data)
            {
                debugger;
                for (var i:number = 0; i < data.length; i++)
                {
                    this.arrBackendDatas.push(
                        {
                            operationName: data[i],
                            date: data[i]
                        }
                    );
                }
                this.arrBackendData = data
            });
    }

    private handleError (error: Response) {
        debugger;
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
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
            date: "1316546"
        });

        var data2 = this.getSignleGarbageData({
            operationName: "Ziv",
            date: "123123"
        })

        this.arrData.push(data1, data2);
    }
}