import { PipeTransform } from '@nestjs/common';
import { TaskStatus } from 'src/tasks/tasks.model';
export declare class TaskStatusValidationPipe implements PipeTransform {
    readonly aallowedStatuses: TaskStatus[];
    transform(value: any): any;
    private isStatusValid;
}
