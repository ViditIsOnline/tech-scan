import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class LanguageBarDataSource extends DataSource<any> {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    constructor(private data: Array<any>) {
        super();
    }
    connect(): Observable<Element[]> {
        return Observable.of(this.data.sort((a, b) => {
            return b.repos - a.repos;
        }));
    }

    disconnect() { }
}
