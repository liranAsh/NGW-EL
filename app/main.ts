/**
 * Created by Ziv on 2/22/2016.
 */
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ActivityService} from './services/activity_service';
bootstrap(AppComponent, [ActivityService]);