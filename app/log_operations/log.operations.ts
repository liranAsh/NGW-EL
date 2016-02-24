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
    public arrBackendData: IDataTable[];

    constructor(private http: Http) {
        this.arrBackendData = [];
    }

    ngOnInit():any {

        this.http.get("http://localhost:60416/api/values")
            .map(res => {
                debugger;
                return <IDataTable[]> res.json();
            })
            .catch(this.handleError)
            .subscribe(res => {
                debugger;
                this.arrBackendData = res;
                debugger;
                var tableWrapper : any = document.querySelector('table-wrapper');
                tableWrapper.getTableElement().reload();
                console.log(res);
            });
    }

    private handleError (error: Response) {
        debugger;
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}