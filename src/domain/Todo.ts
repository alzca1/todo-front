export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  dateCreated: Date;
  dateCompleted?: Date;
}
