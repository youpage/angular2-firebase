import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: any, args: string[]) : string {
    let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    let trail = args.length > 1 ? args[1] : '...';    

    if (Number.isInteger(+value) && value >= Math.pow(10,limit))
        return (Math.pow(10,limit)-1)+trail;        
    
    value = value+'';  
    return (value).length > limit ? value.substring(0, limit) + trail : value;
  }
}