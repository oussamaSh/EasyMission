import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'freelanceJobsFilter'
})
export class FreelanceJobsFilterPipe implements PipeTransform {

  transform(freelanceJobs: any, term: any): any {
    if(term === undefined)return freelanceJobs;
      return freelanceJobs.filter(function(freelanceJob){
      return freelanceJob.title.toLowerCase().includes(term.toLowerCase());

    })
  }

}
