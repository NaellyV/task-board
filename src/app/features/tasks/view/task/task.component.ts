import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  template: `<p>task works!</p>`,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent { }
