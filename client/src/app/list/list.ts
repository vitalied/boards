import { Task } from '../task/task';

export class List {
  id: number;
  board_id: number;
  name: string;
  position: number;
  tasks: Task[];
}
