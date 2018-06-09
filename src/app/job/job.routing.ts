import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JobHistoryComponent } from './jobhistory/jobhistory.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobComponent } from './job.component';

const routes: Routes = [
    {
        path: '',
        component: JobComponent,
        children: [
            {
                path: '',
                children: [
                    { path: '', component: JobHistoryComponent },
                    { path: 'job-details', component: JobDetailsComponent },
                    
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
})

export class JobRoutingModule { }
