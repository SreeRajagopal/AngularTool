import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

environment
@Injectable()
export class JobHistoryService {
    constructor(private httpClient: HttpClient) { }

    getJobsList() {
        return this.httpClient.get(environment.apiBaseUrl + 'jobhistory/msdb/dvacsql-01.aldera.com-DB06')
    }
}
