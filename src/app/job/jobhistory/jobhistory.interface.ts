
export interface JobHistories {
    jobId: string,
    jobName: string,
    lastRunDateTime: DateTimeFormat,
    lastRunStatus: string,
    lastRunDuration: string,
    lastRunStatusMessage: string,
    nextRunDateTime: DateTimeFormat
  }