import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobRoutingModule } from './job.routing';
import { JobComponent } from './job.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JobHistoryComponent } from './jobhistory/jobhistory.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobHistoryService } from './jobhistory/jobhistory.service';
import { NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  imports: [
    CommonModule,
    JobRoutingModule,
    RouterModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule
  ],
  exports: [],
  declarations: [
    JobComponent,
    JobHistoryComponent,
    JobDetailsComponent
  ],
  providers: [JobHistoryService]
})

export class JobModule { }
