import { Component, Input } from '@angular/core';
import { Task, TaskState } from 'src/app/model/task';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent {
  taskByState: Map<TaskState, Task[]> = new Map([
      [TaskState.New, []],
      [TaskState.InProgress, []],
      [TaskState.Closed, []],
    ])

  @Input() set tasks(tasks: Task[]|undefined) {
    if (!tasks) return;
    tasks.forEach(task => {this.taskByState.get(task.state)?.push(task)})
  }
}
