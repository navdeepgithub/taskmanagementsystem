import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from 'src/tasks/tasks.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly aallowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is not a vlid status type`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.aallowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
