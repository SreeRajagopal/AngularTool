import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobHistories } from './jobhistory.interface';
import { JobHistoryService } from './jobhistory.service';

@Component({
  selector: 'app-job-history ',
  templateUrl: './jobhistory.component.html',
  styleUrls: ['./jobhistory.component.scss'],
})

export class JobHistoryComponent implements OnInit {
  public jobhistories: JobHistories[];

  constructor(private jobHistoryService: JobHistoryService) {
    console.log(this.jobhistories);
  }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.jobHistoryService.getJobsList()
      .subscribe(
        (data) => { 
            console.log(data);
            this.jobhistories = data as JobHistories[]; 
            },
        (err) => { console.log(err); }
      )
  }
}
